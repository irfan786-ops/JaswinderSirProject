import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
 
 
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent  implements OnInit {
  contactForm!: FormGroup;
  submittedData: any;
 
  constructor(private fb: FormBuilder) { }
 
  ngOnInit(): void {
    this.createForm();
  }
 
  createForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.maxLength(100)]],
      message: ['', [Validators.required, this.messageMaxLength(50)]]
    });
  }
 
  messageMaxLength(maxLength: number) {
    return (control: FormControl) => {
      const message = control.value;
      if (message) {
        const words = message.trim().split(/\s+/).length;
        return words <= maxLength ? null : { maxLengthExceeded: true };
      }
      return null;
    };
  }
 
 get form() {
    return this.contactForm.controls;
  }
 
  onSubmit() {
    if (this.contactForm.valid) {
      this.submittedData = this.contactForm.value;
      console.log(this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
 
}
 

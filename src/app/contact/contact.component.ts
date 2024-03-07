import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      interestedIn: ['', [Validators.required]],
      extra: ['', []],
    })
  }

  ngOnInit(): void {

  }


  submitForm(event: Event): void {
    event.preventDefault();
    console.log(this.contactForm.value); // Puedes enviar formData a través de una solicitud HTTP u otro método aquí


    /* if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Llamada a la función para enviar el correo
      this.sendEmail(formData).then(() => {
        console.log('Correo enviado correctamente!');
        // Puedes hacer aquí lo que necesites después de enviar el correo
      }).catch((error) => {
        console.error('Error al enviar el correo:', error);
        // Manejar el error aquí
      });

    } else {
      console.log('Formulario no válido');
    } */
  }

  hasErrors(field: string, typeError: string) {
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  }

  sendEmail(formData: any): Promise<EmailJSResponseStatus> {
    return emailjs.send('service_3xq5wrk', 'template_jpuldsf', formData, 'fIa8nejlKy6kC1I7x')
      .then((response) => {
        console.log('Correo enviado:', response);
        return response;
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        throw error;
      });
  }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'hiring',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, CommonModule],
  templateUrl: './hiring.component.html',
  styleUrl: './hiring.component.css'
})
export class HiringComponent implements OnInit {

  hiringForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.hiringForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      interestedIn: ['', [Validators.required]],
      portfolio: ['', []],
      file: ['', [Validators.required]],

    })
  }

  ngOnInit(): void {

  }

  redirectToHome(): void {
    this.router.navigateByUrl('/');
  }

  submitForm(event: Event): void {
    event.preventDefault();
    console.log(this.hiringForm.value); // Puedes enviar formData a través de una solicitud HTTP u otro método aquí


    if (this.hiringForm.valid) {
      const formData = this.hiringForm.value;

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
    }
  }

  hasErrors(field: string, typeError: string) {
    return this.hiringForm.get(field)?.hasError(typeError) && this.hiringForm.get(field)?.touched;
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

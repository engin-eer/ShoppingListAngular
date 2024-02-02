import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Register } from '../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  registerForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordRetry: new FormControl('')

  })

  nameValid: string = '';
  surNameValid: string = '';
  emailValid: string = '';
  passwordValid: string = '';
  passwordRetryValid: string = '';
  constructor(private loginService: LoginService, private router: Router) { }

  register() {
    this.loginService.register(this.registerForm.value as Register).subscribe({
      next: (x) => {
        console.log(x.body)
        console.log(x.headers)
      },

      error: (e: any) => {
        if (e.status == 400) {
          console.log(e)

          this.nameValid=e.error.errors.name !=null ? e.error.errors.nameValid[0]:'';
          this.surNameValid=e.error.errors.surname !=null ? e.error.errors.surNameValid[0]:'';
          this.emailValid=e.error.errors.emailValid !=null ? e.error.errors.emailValid[0]:'';
          this.passwordValid=e.error.errors.passwordValid !=null ? e.error.errors.passwordValid[0]:'';
          this.passwordRetryValid=e.error.errors.passwordRetryValid !=null ? e.error.errors.passwordRetryValid[0]:'';
      }

      if (e.status=404) {
        this.nameValid=''
        this.surNameValid=''
        this.emailValid=''
        this.passwordValid=''
        this.passwordRetryValid=''
      }


      },
      complete:()=>{
        alert("Başarıyla kayıt yapıldı")
        this.router.navigateByUrl('/login')
      }
    })
  }

}

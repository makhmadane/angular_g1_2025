import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  login() {

    this.authService.login(this.loginForm.value as any).subscribe(
      (data: any) => {
        console.log(data);
        this.authService.saveToken(data.access_token);
        this.router.navigateByUrl('/offre');
      },
      (error) => {
        console.log(error);
      }
    )
  }

}


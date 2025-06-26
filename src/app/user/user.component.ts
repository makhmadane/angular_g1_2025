import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth-service.service';
import { User } from '../model/user';
import { LoginResp } from '../model/LoginResp';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   registerForm = new FormGroup({
     name: new FormControl<string>('', [Validators.required]),
     email: new FormControl<string>('', [ Validators.required]),
     password: new FormControl<string>('', [ Validators.required]), 
   });

   constructor(private authService : AuthService, 
    private router : Router
   ){

   }

   register(){
      this.authService.register(this.registerForm.value as User).subscribe(
        (data : LoginResp) =>{
          console.log(data);
          this.authService.saveToken(data.access_token);
          this.router.navigateByUrl('/offre');
        },
        (error) =>{
          console.log(error);
        }
      )
   }
}

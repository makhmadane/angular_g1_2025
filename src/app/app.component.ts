import { Component } from '@angular/core';
import { AuthService } from './service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'offre_l3gl_angular';

  constructor(private authService : AuthService, private router : Router){
    
  }

  logOut(){
    this.authService.logout().subscribe(
      ()=>{
          this.authService.removeToken();
          this.router.navigateByUrl('/login');
      }
    )
  }
}

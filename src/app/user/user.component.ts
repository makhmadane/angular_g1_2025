import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  tab : any[] = [5,9,6,10];


  generate(){
     return ""
  }
}

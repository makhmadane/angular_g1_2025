import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Offre } from '../model/offre';
import { OffreService } from '../service/offre.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrl: './offre.component.css'
})
export class OffreComponent implements OnInit {
  offres : Offre[] = [];
  
  
  constructor(private offreService : OffreService){
    
  }

  ngOnInit(): void {
      this.getAllOffre();
  }

  getAllOffre(){
      this.offreService.getAllOffre().subscribe(
        (data : Offre[])=>{
          this.offres = data;
        },
        (error)=>{
          console.log(error)
        }
      )
  }

  deleteOffre(id:number){
      this.offreService.deleteOffre(id).subscribe(
      (data)=>{
        console.log("success");
        this.getAllOffre();
      },
      (error)=>{
        console.log(error);
      }
    )
  }


}

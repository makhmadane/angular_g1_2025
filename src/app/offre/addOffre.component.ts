import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Offre } from '../model/offre';
import { OffreService } from '../service/offre.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'add-app-offre',
  templateUrl: './addOffre.component.html',
  styleUrl: './offre.component.css'
})
export class AddOffreComponent implements OnInit {
  submitted = false;
  textButton = "Valider"
  offre!: Offre;
  
  offreForm = new FormGroup({
    id: new FormControl<number | null>(null),
    title: new FormControl<string>('', [Validators.minLength(3), Validators.required]),
    lieu: new FormControl<string>('', [Validators.minLength(3), Validators.required]),
    description: new FormControl<string>('', [Validators.minLength(3), Validators.required]),
    date: new FormControl<string>('', [Validators.required]),
  });

  constructor(private offreService: OffreService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      this.textButton = "Modifier"
      this.getOffreById(this.route.snapshot.params['id']);
    }
  }

  get f2() {
    return this.offreForm.controls;
  }

  saveOffre() {
    this.submitted = true;
    if (this.offreForm.invalid) {
      return;
    } else {
      if (this.textButton == "Valider") {
        this.offreService.addOffre(this.offreForm.value as Offre).subscribe(
          (data) => {
            console.log("success");
            this.router.navigateByUrl("/offre");
          },
          (error) => {
            console.log(error);
          }
        )
      }else{
         this.offreService.updateOffre(this.offreForm.value as Offre).subscribe(
          (data) => {
            console.log("success");
            this.router.navigateByUrl("/offre");
          },
          (error) => {
            console.log(error);
          }
        )
      }
    }

  }


  getOffreById(id: number) {
    this.offreService.getByIdOffre(id).subscribe(
      (data: Offre) => {
        console.log(data);
        this.offreForm.get('id')?.setValue(data.id);
        this.offreForm.get('lieu')?.setValue(data.lieu);
        this.offreForm.get('title')?.setValue(data.title);
        this.offreForm.get('description')?.setValue(data.description);
        this.offreForm.get('date')?.setValue(data.date);

      },
      (error) => {
        console.log(error);
      }
    )
  }




}

import { Component, OnInit } from '@angular/core';
import { RessourceService } from 'src/app/services/ressource.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ressource-details',
  templateUrl: './ressource-details.component.html',
  styleUrls: ['./ressource-details.component.css']
})
export class RessourceDetailsComponent implements OnInit {
  currentRessource = null;
  message = '';
  constructor(
    private ressourceService: RessourceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getRessource(this.route.snapshot.paramMap.get('id'));
  }
  getRessource(id) {
    this.ressourceService.get(id)
      .subscribe(
        data => {
          this.currentRessource = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
  updateRessource() {
    this.ressourceService.update(this.currentRessource.id, this.currentRessource)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The ressource was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
  deleteRessource() {
    this.ressourceService.delete(this.currentRessource.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/Ressources']);
        },
        error => {
          console.log(error);
        });
  }
}

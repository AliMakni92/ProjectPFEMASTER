import { Component, OnInit } from '@angular/core';
import { RessourceService } from 'src/app/services/ressource.service';

@Component({
  selector: 'app-ressources-list',
  templateUrl: './ressources-list.component.html',
  styleUrls: ['./ressources-list.component.css']
})
export class RessourcesListComponent implements OnInit {
  ressources: any;
  currentRessource = null;
  currentIndex = -1;
  type = '';
  constructor(private ressourceService: RessourceService) { }

  ngOnInit() {
    this.retrieveRessources();
  }
  retrieveRessources() {
    this.ressourceService.getAll()
      .subscribe(
        data => {
          this.ressources = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  setActiveRessource(ressource, index) {
    this.currentRessource = ressource;
    this.currentIndex = index;
  }

  
}

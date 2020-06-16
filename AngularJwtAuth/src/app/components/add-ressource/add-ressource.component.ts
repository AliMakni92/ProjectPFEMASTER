import { Component, OnInit } from '@angular/core';
import { RessourceService } from 'src/app/services/ressource.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-ressource',
  templateUrl: './add-ressource.component.html',
  styleUrls: ['./add-ressource.component.css']
})
export class AddRessourceComponent implements OnInit {
  ressource = {
    type: '',
    lien: '',
  };
  submitted = false;
  constructor(private ressourceService: RessourceService, private http : HttpClient) { }

  ngOnInit() {
  }
  saveRessource() {
    const data = {
      type: this.ressource.type,
      lien: this.ressource.lien,
     
    };

    this.ressourceService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
}

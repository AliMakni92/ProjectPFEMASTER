import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ressourceUrl = 'http://localhost:8080/api/ressources';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(ressourceUrl);
      }
    
      get(id) {
        return this.http.get(`${ressourceUrl}/${id}`);
      }
    
      create(data) {
        return this.http.post(ressourceUrl, data);
      }
    
      update(id, data) {
        return this.http.put(`${ressourceUrl}/${id}`, data);
      }
    
      delete(id) {
        return this.http.delete(`${ressourceUrl}/${id}`);
      }
    
      deleteAll() {
        return this.http.delete(ressourceUrl);
      }
    
      findByType(type) {
        return this.http.get(`${ressourceUrl}?type=${type}`);
      }
}
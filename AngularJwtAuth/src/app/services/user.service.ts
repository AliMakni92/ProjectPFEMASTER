import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private roles: Array<string> = [];
  private userUrl = 'http://localhost:8080/api/test/user';
  private pmUrl = 'http://localhost:8080/api/test/member';
  private adminUrl = 'http://localhost:8080/api/test/admin';
  private baseUrl = 'http://localhost:8080/api/test/members';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<any> {
    return this.http.get(this.userUrl);
  }

  getPMBoard(): Observable<any> {
    return this.http.get(this.pmUrl);
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.adminUrl);
  }
  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  get(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(this.baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(this.baseUrl);
  }
  findByUsername(username) {
    return this.http.get(`${this.baseUrl}?username=${username}`);
  }
  
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority);
      });
    }

    return this.roles;
  }
}

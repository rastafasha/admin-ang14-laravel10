import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';

//Eviroment
import { environment } from '../../environments/environment';
//Models
import { User } from '../models/user';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User;
  public recientes: User;
  public identity: User;
  // public role: Role;
  error:string;

  constructor(
    private http: HttpClient,
    private router: Router,
    ) {
    this.user;
  }


  get token():string{
    return localStorage.getItem('auth_token') || '';
  }

  get roles(): 'SUPERADMIN' | 'ADMIN' | 'MEMBER' | 'GUEST' {
    return this.user.roles!;
  }


  get headers(){
    return{
      headers: {
        'auth_token': this.token

      }
    }

  }

  guardarLocalStorage( user:any, access_token: any){
    // localStorage.setItem('token', JSON.stringify(token));
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('auth_token', access_token.original.access_token);
  }

  getUserLocalStorage(): void {
    return this.user = JSON.parse(localStorage.getItem('user'));
  }


  getAll(): Observable<any> {

    const url = `${apiUrl}/users`;
    return this.http.get<any>(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, users: User}) => resp.users)
      )
  }

  getUserById(id:number): Observable<any> {

    const url = `${apiUrl}/user/show/${id}`;
    return this.http.get<any>(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, user: User}) => resp.user)
        );

  }

  getRecientes(): Observable<any> {
    const url = `${apiUrl}/users/recientes`;
    return this.http.get<any>(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, recientes: User}) => resp.recientes)
      )
  }


  update(user: User) {
    const url = `${apiUrl}/user/update/${user.id}`;
    return this.http.put(url, user, this.headers);
  }

  deleteById(user:User): Observable<any> {
    const url = `${apiUrl}/user/destroy/${user}`;
    return this.http.delete(url, this.headers)
  }

  //soft deletes

  indexdelete(): Observable<any> {
    const url = `${apiUrl}/users/delete`;
    return this.http.get(url, this.headers)
  }
  userDeleteShow(id:number): Observable<any> {
    const url = `${apiUrl}/user/delete/show/${id}`;
    return this.http.get(url, this.headers)
  }
  userDeleteRestore(id:number): Observable<any> {
    const url = `${apiUrl}/user/delete/restore/${id}`;
    return this.http.put(url, this.headers)
  }
  userDeleteforce(id:number): Observable<any> {
    const url = `${apiUrl}/user/destroy/force/${id}`;
    return this.http.delete(url, this.headers)
  }

  closeMenu(){
    var menuLateral = document.getElementsByClassName("mini-sidebar");
      for (var i = 0; i<menuLateral.length; i++) {
         menuLateral[i].classList.remove("show-sidebar");
        // console.log('pulsado', menuLateral);

      }
  }
  closeMenuSidebar(){
    var menuLateral = document.getElementsByClassName("sidebar");
    for (var i = 0; i<menuLateral.length; i++) {
       menuLateral[i].classList.remove("active");

    }

  }

  changePassword(data:User){
    const url = `${apiUrl}/reset-password/`;
    return this.http.post(url,  data, this.headers);
  }




  resetPassword(){
    const url = `${apiUrl}/reset-password/`;
    return this.http.post(url,  this.headers);
  }

  search(query=''){
    return this.http.get(`${apiUrl}/users/search`, {params: {buscar: query}})

  }



}

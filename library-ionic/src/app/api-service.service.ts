import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserAuth} from './interfaces/DTO/user-auth';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getBooksFromApi() {}

  getBookFromApi(id: number) {}

  authorizeUser(userData: UserAuth) {}
}

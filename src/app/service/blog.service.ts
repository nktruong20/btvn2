import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Blog } from '../Model/blog';
import { HttpClient } from '@angular/common/http';

const urlAPI = 'https://62a047c8a9866630f80aaac4.mockapi.io/btvn2';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Blog[]>{
    return this.http.get<Blog[]>(`${urlAPI}`)
  }

  find(id:number):Observable<Blog>{
    return this.http.get<Blog>(`${urlAPI}/${id}`)
  }
  create(data:Blog):Observable<Blog>{
    return this.http.post(`${urlAPI}`,data)
  }
  delete(id:number):Observable<Blog[]>{
    return this.http.delete<Blog[]>(`${urlAPI}/${id}`)
  }
}

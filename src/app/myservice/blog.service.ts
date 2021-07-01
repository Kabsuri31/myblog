import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {
    
}


public getJSON(): Observable<blog> {
    return this.http.get<blog>("../assets/data.json");
}


}

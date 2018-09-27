import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: Http) { }
  
  url = "http://localhost:3000/courses";

  getCourses() {
    return this.http.get(this.url)
  }
}

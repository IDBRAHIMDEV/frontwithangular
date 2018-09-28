import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: Http) { }
  
  url = environment.url;

  getCourses() {
    return this.http.get(this.url+'/courses')
  }

  saveCourse(course) {
    return this.http.post(this.url+'/courses', course);
  }

  deleteCourse(id) {
    return this.http.delete(this.url+`/courses/${id}`);
  }

  setCourse(course) {
    return this.http.put(this.url+`/courses/${course._id}`, course);
  }
}

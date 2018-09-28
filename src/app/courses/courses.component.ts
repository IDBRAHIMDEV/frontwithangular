import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(public courseService: CourseService,
    public messageService: FlashMessagesService
    ) { }
  
  ngOnInit() {
    this.listCourses();
  }

  operation = true;
  etat = false;
  
  course = {
    id: 0,
    name: "",
    author: "",
    price: 0,
    category: "",
    isPublished: false
  }

  courses = []

  setEtat() {
    this.course = {
      id: 0,
      name: "",
      author: "",
      price: 0,
      category: "",
      isPublished: false
    }
    this.operation = true;
    this.etat = !this.etat;
  }

  addCourse() {
    
    this.courseService.saveCourse(this.course).subscribe(res => {
      this.courses.unshift(res.json())

      this.messageService.show('this course is added successfully...', {cssClass: 'alert-success', timeout: 3000})
    })
    this.course = {
      id: 0,
      name: "",
      author: "",
      price: 0,
      category: "",
      isPublished: false
    } 
    this.etat = false;
  }

  listCourses() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses.json();
    })
  }

  removeCourse(i, id) {
    console.log(i, '-', id);
    this.courseService.deleteCourse(id).subscribe(res => {
      console.log(res.json());
      this.courses.splice(i, 1);
    })
   
  }

  editCourse(course) {
    this.operation = false
    this.course = course;
    this.etat = true;
  }

  updateCourse() {
    this.courseService.setCourse(this.course).subscribe(res => {
      console.log(res.json())

      this.course = {
        id: 0,
        name: "",
        author: "",
        price: 0,
        category: "",
        isPublished: false
      } 
      
      this.operation = true;
      this.etat = false;
    }) 
  }

}

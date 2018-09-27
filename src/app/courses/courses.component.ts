import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(public courseService: CourseService) { }
  
  ngOnInit() {
    this.listCourses();
  }

  etat = false;
  
  course = {
    id: 0,
    name: "",
    author: "",
    price: 0,
    category: "",
    isPublished: false
  }

  courses = [
    {id: 1, name: "Formation en AdonisJS", author: "Mehdi EL JAZOULI", price: 1300, isPublished: true, category: "Web"},
    {id: 2, name: "Formation en SailsJS", author: "Mohamed SAYKOUK", price: 900, isPublished: false, category: "Mobile"},
    {id: 3, name: "Formation en MoaJS", author: "Walid BOUDAD", price: 100, isPublished: false, category: "Web"},
    {id: 4, name: "Formation en Angular", author: "Ayoub BOUDAD", price: 350, isPublished: true, category: "Mobile"},
    {id: 5, name: "Formation en ReactJS", author: "Younes BOUSSETTA", price: 500, isPublished: false, category: "Mobile"},
    {id: 6, name: "Formation en lARAVEL", author: "Asmae ELABID", price: 400, isPublished: true, category: "Web"},
  ]

  setEtat() {
    this.etat = !this.etat;
  }

  addCourse() {

    this.courses.unshift(this.course);
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
      console.log(courses);
    })
  }

  deleteCourse(i) {
    this.courses.splice(i, 1);
  }

}

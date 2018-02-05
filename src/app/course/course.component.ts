import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = "List of Course";
  imageUrl = "http://brandmark.io/logo-rank/random/beats.png";
  imageUrl2 = "http://brandmark.io/logo-rank/random/apple.png";
  colSpan = 2;
  isActive = true;
  listCourses;
  email = "me@example.com";
  textSentences = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet";
  viewMode = "map";
  inputList = "Grape";
  canSave = true;

  course = {
  	title : "The Complete Senteces",
  	rating : 4.8742,
  	students : 321312,
  	price : 190.5123,
  	releaseDate : new Date(2018, 1, 29)
  }

  getTitle() {
  	return this.title;
  }

  onDivClick() {
  	console.log("test2")
  }

  onClick($event) {
  	$event.stopPropagation();

  	console.log($event)
  }

  onKeyUp() {
   console.log(this.email)
  }

  addList(inputList) {
    let obj = {
      id: this.listCourses[this.listCourses.length - 1].id + 1,
      name: inputList
    };
    this.listCourses.push(obj)
  }

  DeleteList(course) {
    let index = this.listCourses.indexOf(course);
    this.listCourses.splice(index, 1);
  }

  UpdateList(course) {
    course.name = this.inputList;
  }

  onClickStyle() {
    if (this.canSave == true) {
      this.canSave = false;
    } else {
      this.canSave = true;
    }
  }

  constructor(service: CoursesService) {
  	this.listCourses = service.getCourses();
  }

  ngOnInit() {
  }

}

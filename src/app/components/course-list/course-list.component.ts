import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/CourseServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {
  courses = [];
  newCourseTitle = '';
  deleteCourse = (courseToDelete) =>
    this.courses = this.courses.filter(course => course !== courseToDelete);

  createCourse = (title) =>
    this.courses.push({_id: '321', title});

  constructor(private service: CourseServiceClient) { }

  ngOnInit(): void {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}

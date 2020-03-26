import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../../services/CourseServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: CourseServiceClient) {
  }

  lessons = []
  courseId = ''
  moduleId = ''
  lessonId = ''

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.moduleId = params.mid;
      this.lessonId = params.lid;
      this.service.findLessonsForModule(this.moduleId)
        .then(lessons => this.lessons = lessons);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {QuizzesServiceClient} from '../../services/QuizzesServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: QuizzesServiceClient) { }

  courseId = '';
  quizzes = [];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      console.log(this.courseId);
      this.service.findAllQuizzes(this.courseId)
        .then(quizzes => this.quizzes = quizzes)
    });
  }

  deleteQuiz = (quizDeleted) =>
    this.service.deleteQuiz(this.courseId, quizDeleted._id)
      .then(status => this.quizzes = this.quizzes.filter(quiz => quiz._id !== quizDeleted._id))

  createQuiz = () =>
    this.service.createQuiz(this.courseId)
      .then(quiz => this.quizzes.push(quiz))

}

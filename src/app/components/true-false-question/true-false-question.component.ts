import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../../services/CourseServiceClient';


@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', choices: [], answer: '', correct: ''};
  grading = false;
  @Input()
  answer = '';
  @Output()
  answerChange = new EventEmitter<string>();

  grade = () => { this.grading = true }

  constructor(private route: ActivatedRoute,
              private service: CourseServiceClient) { }

  ngOnInit(): void {
  }

}

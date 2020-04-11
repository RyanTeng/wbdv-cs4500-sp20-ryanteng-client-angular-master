import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {_id: '', title: '', question: '', choices: [], answer: '', correct: ''};
  grading = false;
  @Input()
  answer = '';
  @Output()
  answerChange = new EventEmitter<string>();

  grade = () => { this.grading = true }

  ngOnInit(): void {
  }

}

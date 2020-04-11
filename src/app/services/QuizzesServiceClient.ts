import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesServiceClient {
  createQuiz = (cid) =>
    fetch(`http://localhost:3000/api/quizzes`, {
      method: 'post',
      body: JSON.stringify({title: 'New Quiz'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  findAllQuizzes = (cid) =>
    fetch(`http://localhost:3000/api/quizzes`)
      .then(response => response.json());

  deleteQuiz = (cid, qid) =>
    fetch(`http://localhost:3000/api/quizzes/${qid}`, {
      method: 'delete'
    })
  // .then(response => response.json())
}

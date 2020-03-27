import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesServiceClient {
  createQuiz = (cid) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/001642349/courses/${cid}/quizzes`, {
      method: 'post',
      body: JSON.stringify({title: 'New Quiz'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
  findAllQuizzes = (cid) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/courses/${cid}/quizzes`)
      .then(response => response.json())

  deleteQuiz = (cid, id) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/courses/${cid}/quizzes/${id}`, {
      method: 'delete'
    })
  // .then(response => response.json())
}

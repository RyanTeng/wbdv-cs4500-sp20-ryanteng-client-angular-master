import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = async (cid) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/courses/${cid}/quizzes`);
    return await response.json();
  };
}

import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = async (qid) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/001642349/quizzes/${qid}`);
    return await response.json();
  };
}

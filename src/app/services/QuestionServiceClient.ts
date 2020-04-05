import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = async (qid) => {
    const response = await fetch(`http://localhost:3000/api/quizzes/${qid}/questions`);
    return await response.json();
  };
}

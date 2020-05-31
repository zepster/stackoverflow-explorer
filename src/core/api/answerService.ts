import { decodeHtml } from '../../utils';
import { IAnswer } from '../answers/types';
import { makeRequest } from './request';

const byQuestion = (questionId: number) => `/questions/${questionId}/answers?order=desc&sort=votes&site=stackoverflow&filter=!--1nZx2SA3cX`;

const normalizeAnswersResponse = (answers: any[]) => answers.map((answer) => ({
  userName: decodeHtml(answer.owner.display_name),
  title: decodeHtml(answer.title),
  body: answer.body,
  score: answer.score,
  isAccepted: answer.is_accepted,
}));

export const answerService = {
  loadAnswers: (questionId: number): Promise<IAnswer[]> => makeRequest(
    byQuestion(questionId),
    normalizeAnswersResponse,
  ),
};

import { decodeHtml } from '../../utils';
import { IQuestion } from '../questions/types';
import { makeRequest } from './request';

const byTitle = (title: string) => `/search?order=desc&sort=activity&site=stackoverflow&intitle=${title}`;
const byAuthor = (authorId: number) => `/users/${authorId}/questions?order=desc&sort=votes&site=stackoverflow`;
const byTag = (tag: string) => `/questions?order=desc&sort=activity&site=stackoverflow&tagged=${tag}`;

const normalizeQuestionResponse = (questioins: any[]) => questioins.map((question) => ({
  userId: question.owner.user_id,
  userName: decodeHtml(question.owner.display_name),
  title: decodeHtml(question.title),
  answerCount: question.answer_count,
  questionId: question.question_id,
  tags: question.tags,
}));

export const questionService = {
  searchByTitle: (title: string): Promise<IQuestion[]> => makeRequest(
    byTitle(title),
    normalizeQuestionResponse,
  ),
  searchByAuthor: (authorId: number): Promise<IQuestion[]> => makeRequest(
    byAuthor(authorId),
    normalizeQuestionResponse,
  ),
  searchByTag: (tag: string): Promise<IQuestion[]> => makeRequest(
    byTag(tag),
    normalizeQuestionResponse,
  ),
};

import React, { useEffect, useRef } from 'react';
import { IAnswer } from '../../../core/answers/types';
import {
  animateElement,
  shineGreen,
} from '../../components/animation/animationPreset';

interface AnswerShortInfo<T> {
  answer: IAnswer;
}

function AnswerShortInfo<T>(props: AnswerShortInfo<T>) {
  const { answer } = props;
  const acceptedRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    if (answer.isAccepted && acceptedRef.current) {
      animateElement(acceptedRef.current, shineGreen, {
        delay: 3000,
        iterations: 3,
        duration: 1000,
      });
    }
  }, [answer.isAccepted]);
  return (
    <ul className="se-answer__short-info">
      <li className="se-answer__short-info-item">
        <b>Автор: </b>
        {answer.userName}
      </li>
      <li className="se-answer__short-info-item">
        <b>Рейтинг:</b>
        {answer.score}
      </li>
      <li className="se-answer__short-info-item" ref={acceptedRef}>
        <b>Решение:</b>
        {answer.isAccepted ? 'Да' : 'Нет'}
      </li>
    </ul>
  );
}

export default AnswerShortInfo;

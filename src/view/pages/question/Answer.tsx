import React, { useEffect, useRef } from 'react';
import { IAnswer } from '../../../core/answers/types';

import AnswerShortInfo from './AnswerShortInfo';
import './answer.css';
import {
  animateElement,
  appear,
} from '../../components/animation/animationPreset';

interface Answer {
  answer: IAnswer;
  index: number;
}

function Answer(props: Answer) {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (elementRef.current) {
      animateElement(elementRef.current, appear, 1000);
    }
  }, []);

  const { answer } = props;
  return (
    <div className="se-answer" ref={elementRef}>
      <AnswerShortInfo answer={answer} />
      <div className="se-answer__body">
        <code dangerouslySetInnerHTML={{ __html: answer.body }} />
      </div>
    </div>
  );
}

export default Answer;

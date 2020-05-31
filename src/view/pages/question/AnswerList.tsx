import React from 'react';
import { IAnswer } from '../../../core/answers/types';
import './answer-list.css';

interface AnswerListProp {
  items: IAnswer[];
  children: (item: IAnswer, index: number) => JSX.Element;
}

function AnswerList(props: AnswerListProp) {
  const { items } = props;
  return (
    <div className="se-answer-list">
      {items.map((item, index) => (
        <div className="se-answer-list__item" key={index}>
          {props.children(item, index)}
        </div>
      ))}
    </div>
  );
}

export default AnswerList;

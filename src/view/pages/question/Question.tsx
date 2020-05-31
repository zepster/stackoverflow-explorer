import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answersActions, getAnswers } from '../../../core/answers';
import { Panel } from '../../components';
import { useRefParamValues } from '../../hooks';
import AnswerList from './AnswerList';
import Answer from './Answer';
import {
  animateElement,
  appear,
} from '../../components/animation/animationPreset';

const Question = (props: any, ref: any) => {
  const dispatch = useDispatch();
  const [items, isLoading] = useSelector(getAnswers);
  const { questionId } = useRefParamValues<{ questionId: string }>();

  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isLoading && items.length && elementRef.current) {
      animateElement(elementRef.current, appear, 1000);
    }
  }, [isLoading, items]);

  useEffect(() => {
    if (questionId) {
      dispatch(answersActions.loadAnswers(+questionId));
    }
  }, [dispatch, questionId]);

  const questionTitle = useMemo(() => items.length && items[0].title, [items]);

  return (
    <Panel ref={ref}>
      <h2>
        Question
        {questionId}
      </h2>
      {isLoading ? null : (
        <div ref={elementRef}>
          <h3>{questionTitle}</h3>
          <AnswerList items={items}>
            {(answer, index) => <Answer answer={answer} index={index} />}
          </AnswerList>
        </div>
      )}
    </Panel>
  );
};

export default React.forwardRef(Question);

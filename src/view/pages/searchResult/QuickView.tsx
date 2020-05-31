import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getQuickQuestions, questionActions } from '../../../core/questions';
import { Panel } from '../../components';
import useRefParamValues from '../../hooks/useRefParamValues';
import { IQuestion } from '../../../core/questions/types';

interface QuickViewProps {
  mode: 'author' | 'tag';
  children: (loading: boolean, items: IQuestion[]) => JSX.Element;
}

const QuickView: React.FunctionComponent<QuickViewProps> = (props) => {
  const { mode, children } = props;
  /**
   * tagRefValue - используем для завершения анимации, хотя урл уже сменился
   */
  const { tag: tagRefValue } = useRefParamValues<{
    authorId: string;
    tag: string;
  }>();
  /**
   * На изменения этих пропсов запускаем загрузку
   */
  const { authorId, tag } = useParams<{ authorId: string; tag: string }>();
  const dispatch = useDispatch();
  const [items, isLoading] = useSelector(getQuickQuestions);

  const header = useMemo(() => {
    if (!tagRefValue && !tag) {
      return 'Поиск вопросов автора';
    }

    return `Поиск вопросов по тегу: ${tag || tagRefValue}`;
  }, [tag, tagRefValue]);

  useEffect(() => {
    if (mode === 'author' && authorId) {
      dispatch(questionActions.searchAuthorQuestions(+authorId));
    }
    if (mode === 'tag' && tag) {
      dispatch(questionActions.searchTagQuestions(tag));
    }
  }, [mode, dispatch, tag, authorId]);

  return (
    <Panel closeOnEsc header={header}>
      { children(isLoading, items) }
    </Panel>
  );
};

export default QuickView;

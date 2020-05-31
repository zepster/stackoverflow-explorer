import React, { useEffect, useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { questionActions, getQuestions } from '../../../core/questions';
import QuickView from './QuickView';
import QuestionTable from './QuestionTable';
import { useRefParamValues } from '../../hooks';
import QuickViewContainer from './QuickViewContainer';
import { Panel, RouteWithAnimation } from '../../components';
import './quick-view-container.css';

const SearchResult = (props: any, ref: any) => {
  const { searchValue } = useRefParamValues<{ searchValue: string }>();
  const dispatch = useDispatch();
  const [items, isLoading] = useSelector(getQuestions);
  const match = useRouteMatch();

  const [path, url] = useMemo(() => {
    if (match) {
      return [match.path, match.url];
    }
    return ['', ''];
  }, [match]);

  useEffect(() => {
    dispatch(questionActions.searchQuestions(searchValue));
  }, [dispatch, searchValue]);

  return (
    <div className="se-view-container" ref={ref}>
      <Panel header={`Вопросы по запросу: ${searchValue}`}>
        <QuestionTable url={url} items={items} loading={isLoading} />
        <RouteWithAnimation
          path={`${path}/author/:authorId`}
          component={(routRef: any) => (
            <QuickViewContainer ref={routRef}>
              <QuickView mode="author">
                {(isLoadAuthorQuestions, authorQuestions) => (
                  <QuestionTable
                    items={authorQuestions}
                    url={url}
                    loading={isLoadAuthorQuestions}
                  />
                )}
              </QuickView>
            </QuickViewContainer>
          )}
        />
        <RouteWithAnimation
          path={`${path}/tag/:tag`}
          component={(routRef: any) => (
            <QuickViewContainer ref={routRef}>
              <QuickView mode="tag">
                {(isLoadTagQuestions, tagQuestions) => (
                  <QuestionTable
                    items={tagQuestions}
                    url={url}
                    loading={isLoadTagQuestions}
                  />
                )}
              </QuickView>
            </QuickViewContainer>
          )}
        />
      </Panel>
    </div>
  );
};

export default React.forwardRef(SearchResult);

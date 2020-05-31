import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Tag } from '../../components';
import { IQuestion } from '../../../core/questions/types';
import { SortedColumns } from '../../components/Table/Table';

interface QuestionTableProp {
  items: IQuestion[];
  url: string;
  loading?: boolean;
}

const sortFunction = (
  itemA: IQuestion,
  itemB: IQuestion,
  colName: SortedColumns,
  direction: boolean,
): number => {
  const [valA, valB] = direction
    ? [itemA[colName], itemB[colName]]
    : [itemB[colName], itemA[colName]];
  return `${valA}`.localeCompare(`${valB}`);
};

const titleCellContent = (answerCount: number, title: string) => `[${answerCount}] | ${title}`;

const QuestionTable: React.FunctionComponent<QuestionTableProp> = ({
  items,
  url,
  loading,
}) => {
  const [sorting, setSorting] = useState<[SortedColumns, boolean]>();
  const sortedItems = useMemo(() => {
    if (sorting) {
      const [sortedColName, direction] = sorting;
      return items
        .slice()
        .sort((itemA, itemB) => sortFunction(itemA, itemB, sortedColName, direction));
    }
    return items;
  }, [sorting, items]);
  return (
    <Table
      <IQuestion>
      items={sortedItems}
      loading={loading}
      renderAuthorCell={({ userId, userName }) => (
        <Link to={`${url}/author/${userId}`}>{userName}</Link>
      )}
      renderTitleCell={({ title, answerCount, questionId }) => (!answerCount ? (
        `[${answerCount}] | ${title}`
      ) : (
        <Link to={`/question/${questionId}`}>
          { titleCellContent(answerCount, title) }
        </Link>
      ))}
      renderTagCell={({ tags }: any) => tags.map((tag: string) => (
        <Link key={tag} to={`${url}/tag/${tag}`}>
          <Tag>{tag}</Tag>
        </Link>
      ))}
      onSortChange={setSorting}
      sorting={sorting}
    />
  );
};

export default QuestionTable;

import React, { ReactNode, useCallback } from 'react';
import './index.css';

export type SortedColumns = 'userName' | 'answerCount';

interface TableProps<T> extends React.TableHTMLAttributes<HTMLTableElement> {
  items: T[];
  renderAuthorCell: (row: T) => ReactNode;
  renderTitleCell: (row: T) => ReactNode;
  renderTagCell: (row: T) => ReactNode;
  loading?: boolean;
  onSortChange?: (options: [SortedColumns, boolean]) => void,
  /**
   * Имя колонки, направление
   */
  sorting?: [SortedColumns, boolean],
}

const Tr: React.FunctionComponent<React.HTMLAttributes<HTMLTableRowElement>> = (
  { children },
) => <tr className="se-table__row">{children}</tr>;

const Td: React.FunctionComponent<React.HTMLAttributes<HTMLTableCellElement>> = (
  { children },
) => <td className="se-table__cell">{children}</td>;

const Th: React.FunctionComponent<React.HTMLAttributes<HTMLTableCellElement>> = (
  { children, className, ...props },
) => <th {...props} className={`se-table__cell se-table__th-cell ${className}`}>{children}</th>;

function Table<T>({ items, ...props }: TableProps<T>) {
  const {
    renderAuthorCell, renderTitleCell, renderTagCell, loading, onSortChange, sorting,
  } = props;

  const onSortCallback = useCallback((colName: SortedColumns) => {
    if (onSortChange) {
      if (sorting) {
        const [sortedColName, direction = false] = sorting;
        onSortChange([colName, colName === sortedColName ? !direction : false]);
      } else {
        onSortChange([colName, false]);
      }
    }
  }, [onSortChange, sorting]);

  const getSortclassName = useCallback((colName: string) => {
    if (!sorting) { return ''; }
    const [sortedColName, direction = false] = sorting;
    if (colName === sortedColName) {
      return `se-table__cell--sort-${direction ? 'asc' : 'desc'}`;
    }
    return '';
  }, [sorting]);

  const EmptyItems = () => (
    <Tr>
      <Td />
      <Td>{loading ? 'Обновление....' : 'Не найдено'}</Td>
      <Td />
    </Tr>
  );

  const RowList = (question: T, index: number) => (
    <Tr key={index}>
      <Td>{renderAuthorCell(question)}</Td>
      <Td>
        <code>{renderTitleCell(question)}</code>
      </Td>
      <Td>{renderTagCell(question)}</Td>
    </Tr>
  );

  return (
    <table className="se-table">
      <thead>
        <Tr>
          <Th
            onClick={() => onSortCallback('userName')}
            className={getSortclassName('userName')}
          >
            Автор
          </Th>
          <Th
            onClick={() => onSortCallback('answerCount')}
            className={getSortclassName('answerCount')}
          >
            Тема(Кол-во ответов)
          </Th>
          <Th>
            Теги
          </Th>
        </Tr>
      </thead>
      <tbody className="se-table__body">
        {!loading && items.length ? items.map(RowList) : <EmptyItems />}
      </tbody>
    </table>
  );
}

export default Table;

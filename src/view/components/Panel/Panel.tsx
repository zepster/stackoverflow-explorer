import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../index';
import './index.css';
import { useActionOnKeyUpEffect } from '../../hooks';

interface PanelProps extends React.HTMLProps<HTMLDivElement> {
  header?: string;
  closeOnEsc?: boolean;
}

const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ children, header, closeOnEsc }, ref) => {
    const history = useHistory();
    useActionOnKeyUpEffect(
      () => closeOnEsc && history.goBack(),
      useActionOnKeyUpEffect.KEY_CODES.ESC,
    );
    return (
      <div className="se-panel" ref={ref}>
        <div className="se-panel__header">
          <Button className="se-panel__action" onClick={history.goBack}>
            {'<Назад'}
          </Button>
          {header}
        </div>
        <div>{children}</div>
      </div>
    );
  },
);

export default Panel;

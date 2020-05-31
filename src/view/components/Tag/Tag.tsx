import React from 'react';
import './index.css';

const Tag: React.FunctionComponent<React.HTMLAttributes<HTMLSpanElement>> = ({
  children,
  ...props
}) => (
  <span className="se-tag" {...props}>
    {children}
  </span>
);

export default Tag;

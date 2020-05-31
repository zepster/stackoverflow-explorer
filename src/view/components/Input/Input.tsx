import React from 'react';
import './index.css';

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => (
    <input ref={ref} className="se-input" {...props} />
  ),
);

export default Input;

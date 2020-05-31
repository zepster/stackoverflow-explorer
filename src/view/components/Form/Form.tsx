import React from 'react';
import './index.css';

const Form = React.forwardRef<
HTMLFormElement,
React.FormHTMLAttributes<HTMLFormElement>
>(({ children, ...props }, ref) => (
  <form ref={ref} className="se-form" {...props}>
    {children}
  </form>
));

export default Form;

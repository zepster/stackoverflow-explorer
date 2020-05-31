import React from 'react';

const Button: React.FunctionComponent<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  { children, ...props },
  // eslint-disable-next-line react/button-has-type
) => <button {...props}>{children}</button>;

export default Button;

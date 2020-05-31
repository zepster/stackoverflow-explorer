import React from 'react';
import './quick-view-container.css';

const QuickViewContainer = React.forwardRef<
HTMLDivElement,
React.HTMLProps<HTMLDivElement>
>(({ children }, ref) => (
  <div className="quick-view-container" ref={ref}>
    {children}
  </div>
));

export default QuickViewContainer;

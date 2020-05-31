import React, { useEffect, useRef, useState } from 'react';
import { matchPath, Route } from 'react-router-dom';
import queueFactory from './queue';
import { routeIn, routeOut, animateElement } from './animationPreset';
/**
 * Со стилями тоже работает
 * Решил сделать на новом API
 *
 * Вариант на стилях
 * - евент onanimationend
 */
import './fade-animation.css';

const exitQueue = queueFactory();

const RouteFadeOut: React.FunctionComponent<any> = ({
  match,
  location,
  component: Component,
  name,
}) => {
  const show = match && !!matchPath(location.pathname, { ...match });
  const refComponent = useRef<HTMLElement>();
  const [shouldRender, setRender] = useState(false);

  useEffect(() => {
    if (show) {
      exitQueue.onDone(() => {
        setRender(true);
        if (refComponent.current) {
          animateElement(refComponent.current, routeIn, 300);
        }
      });
    } else if (refComponent.current) {
      const resolver: any = exitQueue.getResolver((done: any) => {
        setRender(false);
        done();
      });
      animateElement(refComponent.current, routeOut, 300, resolver);
    }
    return () => {};
  }, [show, name]);

  if (!shouldRender) {
    return null;
  }

  if (typeof Component === 'function') {
    return Component(refComponent);
  }

  return <Component ref={refComponent} />;
};

/**
 * Сокращенная запись использования в компонентах
 */
export const RouteWithAnimation: any = ({
  component: Component,
  ...routeProps
}: any) => (
  <Route
    {...routeProps}
    children={(props) => <RouteFadeOut {...props} component={Component} />}
  />
);

export default RouteFadeOut;

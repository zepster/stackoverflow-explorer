import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function useRefParamValues <T>() {
  const routeParams = useParams<T>();
  const refParams = useRef<T>(routeParams);
  useEffect(() => {
    refParams.current = routeParams;
  }, [routeParams]);
  return refParams.current;
}

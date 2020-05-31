import { useCallback, useEffect } from 'react';

const KEY_CODES = {
  ESC: 'Escape',
};

function useActionOnKeyUpEffect(fn: Function, keyCode: string, opt?: AddEventListenerOptions) {
  const fnMemo = useCallback((event: KeyboardEvent) => {
    if (event.code === KEY_CODES.ESC) {
      fn();
    }
  }, [fn]);

  useEffect(() => {
    window.addEventListener('keyup', fnMemo, opt);
    return () => {
      window.removeEventListener('keyup', fnMemo);
    };
  }, [fnMemo, opt]);
}

useActionOnKeyUpEffect.KEY_CODES = KEY_CODES;

export default useActionOnKeyUpEffect;

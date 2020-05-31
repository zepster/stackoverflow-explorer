/**
 * Для работы анимации роутов в обе стороны
 * важно хранить порядок монтирования и размонтирования компонентов
 *
 * Начнет монтирование если нет анимаций на размонтирование или все
 * анимации завершены.
 */
export default () => {
  let waiter = Promise.resolve();
  const getWaiter = () => waiter;
  return {
    onDone: (cb: any) => {
      Promise.resolve().then(getWaiter).then(() => {
        cb();
        waiter = Promise.resolve();
      });
    },
    getResolver: (cb: any) => {
      let resolver:any;
      const newPromise: Promise<any> = new Promise((resolve) => {
        resolver = resolve;
      });
      const queue = Promise.resolve(waiter);
      waiter = waiter.then(() => newPromise);
      return () => queue.then(() => cb(resolver));
    },
  };
};

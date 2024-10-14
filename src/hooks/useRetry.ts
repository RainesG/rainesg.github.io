export const useRetry = () => {
  function retry(promiseFn: () => Promise<unknown>, retryTimes: number) {
    return new Promise((resolve, reject) => {
      promiseFn()
        .then(resolve)
        .catch(() => {
          if (retryTimes > 0) {
            retry(promiseFn, retryTimes - 1)
              .then(resolve)
              .catch(reject);
          } else {
            reject();
          }
        });
    });
  }

  return retry;
};

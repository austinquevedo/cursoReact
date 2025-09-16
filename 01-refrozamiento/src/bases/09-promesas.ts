const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
    reject('Algo salio mal');
  }, 2000);
});

myPromise
  .then((value) => {
    console.log(`Me han llegado los ${value}`);
  })
  .catch((err) => {
    console.log('no me han devuelto el dinero', err);
  })
  .finally(() => {
    console.log('Yo siempre me ejecuto');
  });

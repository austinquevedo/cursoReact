const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(100);
    reject('200');
  }, 2000); // esto indica que se va a ejecutar en 2 segundos
});

myPromise
  .then((value) => {
    console.log(`Me han llegado los ${value}`);
  })
  .catch((err) => {
    console.warn(`no me han devuelto el dinero ${err}`);
  })
  .finally(() => {
    console.log('Yo siempre me ejecuto');
  });

import type { DataURL } from '../data/prueba.data';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

const myRequest = fetch(url);

const createDataInsideDOM = (body: string) => {
  const pContenido = document.createElement('p');
  pContenido.innerHTML = `<div><br> <em>${body}</em></div>`;
  document.body.append(pContenido);
};

myRequest
  .then((response) => response.json())
  .then(({ body }: DataURL) => {
    createDataInsideDOM(body);
  })
  .catch((err) => {
    console.warn(err);
  });

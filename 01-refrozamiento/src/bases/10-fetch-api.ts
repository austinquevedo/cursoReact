import type { GiphyRandomResponse, Gif } from '../data/giphy.response';
// cuando es un valor constantemente es mejor declararlo en mayusculas
const API_URL = 'MoVLe1yRpeO2o0I9YMefk9E577ZKT96O';

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_URL}`
);

const createImageInsedeDOM = (url: string) => {
  const img = document.createElement('img');
  img.src = url;
  document.body.append(img);
};

myRequest
  .then((reponse) => reponse.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imgURL = data.images.original.url;
    createImageInsedeDOM(imgURL);
  })
  .catch((err) => {
    console.warn(err);
  });

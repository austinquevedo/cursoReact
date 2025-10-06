import type { GiphyRandomResponse, Gif } from '../data/giphy.response';
// cuando es un valor constantemente es mejor declararlo en mayusculas
const API_URL = 'MoVLe1yRpeO2o0I9YMefk9E577ZKT96O';

const createImageInsedeDOM = (url: string) => {
  const img = document.createElement('img');
  img.src = url;
  document.body.append(img);
};

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_URL}`
  );
  if (!response.ok) throw new Error('No se pudo realizar la peticion');

  const { data } = (await response.json()) as GiphyRandomResponse;

  return data.images.original.url;
};

getRandomGifUrl()
  .then((url) => createImageInsedeDOM(url))
  .catch(console.warn)
  .finally(() => console.log('Se termino la peticion'));

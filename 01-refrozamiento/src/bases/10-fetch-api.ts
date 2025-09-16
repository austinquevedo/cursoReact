const API_URL = 'MoVLe1yRpeO2o0I9YMefk9E577ZKT96O';

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_URL}`
);

myRequest
  .then((reponse) => reponse.json())
  .then((data) => {
    const imgURL = data.data.images.original.url;
    const div = document.createElement('div');
    const img = document.createElement('img');

    img.src = imgURL;
    document.body.append(div);
    document.body.append(img);
  })
  .catch((err) => {
    console.warn(err);
  });

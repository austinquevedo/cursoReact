import { mockGifs, type Gif } from '../../mock-data/gifs.mock';

export const GifsContainer = () => {
  return (
    <div className="gifs-container">
      {mockGifs.map((gif: Gif) => (
        <div className="gif-card" key={gif.id}>
          <img src={gif.url} alt={gif.title} />
          <h3>{gif.title}</h3>
          <p>
            {gif.width} x {gif.height} (1.5mb)
          </p>
        </div>
      ))}
    </div>
  );
};

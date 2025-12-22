import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './gifs/components/GifList';
import { mockGifs } from './mock-data/gifs.mock';
import { useState } from 'react';

export const GifsApp = () => {
  const handleTermClick = (term: string) => {
    console.log(term);
  };

  const [previousSearches, setPreviousSearches] = useState<string[]>([
    'dragon ball z',
    'heman',
  ]);

  const handleSearch = (query: string) => {
    query = query.toLowerCase().trim();
    if (query.length === 0) return;
    if (previousSearches.includes(query)) return;
    // Agregar el nuevo término al inicio de la lista, si cumple con las condiciones donde sea menor a 8 caracteres
    const currentTerm = previousSearches.slice(0, 6);
    currentTerm.unshift(query);
    setPreviousSearches(currentTerm);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte el gif perfecto"
      />
      {/* seccion para la busqueda de gifs */}
      <SearchBar placeholder="Buscar gifs" onQuery={handleSearch} />
      {/* sección para las búsquedas previas */}
      <PreviousSearches
        searches={previousSearches}
        onLabelClick={handleTermClick}
      />
      {/* seccion para mostrar los gifs */}
      {/* <GifsContainer />*/}
      <GifList gifs={mockGifs} />
    </>
  );
};

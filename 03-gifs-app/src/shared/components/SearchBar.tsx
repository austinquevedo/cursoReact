import { useState, useEffect } from 'react';
import type { KeyboardEvent } from 'react';

export interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = 'Buscar', onQuery }: Props) => {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    // Si el query está vacío, no hacer nada
    if (query.trim() === '') return;

    const timeOutId = setTimeout(() => {
      onQuery(query.toLowerCase().trim());
    }, 1000);

    // Función de limpieza: se ejecuta cuando el componente se desmonta
    // o cuando query cambia antes de que se complete el timeout
    return () => {
      clearTimeout(timeOutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query.toLowerCase().trim());
    setQuery('');
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value.toLowerCase())}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

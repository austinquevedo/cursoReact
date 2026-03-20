# CLAUDE.md — 03-gifs-app

## Descripcion del proyecto
App de busqueda de GIFs construida como ejercicio de un curso de React. Permite buscar GIFs, mantener un historial de busquedas y visualizar resultados en un grid.

## Stack
- React 19 + TypeScript
- Vite (bundler, dev server)
- Sin librerias de UI ni estado global externo

## Comandos
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de produccion (tsc + vite build)
npm run lint     # ESLint
```

## Estructura
```
src/
├── GifsApp.tsx                  # Componente raiz, maneja estado global
├── main.tsx
├── mock-data/gifs.mock.ts       # Tipo Gif + datos de prueba
├── shared/components/
│   ├── CustomHeader.tsx         # Header presentacional
│   └── SearchBar.tsx            # Input con debounce 1s
└── gifs/components/
    ├── GifList.tsx              # Grid de GIFs (recibe gifs via props)
    ├── GifsContainer.tsx        # Descartado (usa mock directo)
    └── PreviousSearches.tsx     # Historial de busquedas clicable
```

## Tipo base
```ts
interface Gif {
  id: string;
  title: string;
  url: string;
  width: number;
  height: number;
}
```

## Convenciones
- Componentes como named exports con `FC<Props>` cuando reciben props
- Interfaces de props definidas en el mismo archivo del componente
- Archivos de componentes en PascalCase
- Todo el codigo en TypeScript estricto

## Estado actual
- La busqueda aun usa `mock-data/gifs.mock.ts` en lugar de la API de Giphy
- `handleTermClick` en `GifsApp` solo hace `console.log` — pendiente conectar re-busqueda
- `GifsContainer` esta comentado/obsoleto

## Proximo paso
Integrar la API de Giphy:
1. Crear un custom hook `useGifs(query)` que llame a la API
2. Reemplazar `mockGifs` por los resultados del hook en `GifsApp`
3. Conectar `handleTermClick` para disparar nuevas busquedas desde el historial

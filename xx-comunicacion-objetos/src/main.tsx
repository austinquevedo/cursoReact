import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Padre } from './Padre.tsx'
// import { ListaDeCompras } from "./ListaDeCompras.tsx";
import "./index.css";
import { Calculadora } from "./Calculadora.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Padre /> */}
    {/* <ListaDeCompras /> */}
    <Calculadora />
  </StrictMode>
);

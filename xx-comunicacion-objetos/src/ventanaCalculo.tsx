import "./calculadora.css";

type CalculoPros = {
  numero?: string;
};

export const Ventana = ({ numero }: CalculoPros) => {
  return (
    <div>
      <label className="calculo-label" htmlFor="">
        {numero}
      </label>
    </div>
  );
};

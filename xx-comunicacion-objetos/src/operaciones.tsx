type OperacionProps = {
  operacion: string;
  onClick: () => void;
};

export const Operacion = ({ operacion, onClick }: OperacionProps) => {
  return (
    <div>
      <button onClick={onClick}>{operacion}</button>
    </div>
  );
};

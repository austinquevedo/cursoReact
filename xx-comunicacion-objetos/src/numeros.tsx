type NumeroProps = {
  numero?: number;
  operacion?: string;
  onClick: () => void;
  className?: string;
};

export const Numero = ({
  numero,
  operacion,
  onClick,
  className,
}: NumeroProps) => {
  const displayValue = numero !== undefined ? numero : operacion;

  return (
    <div className={className}>
      <button onClick={onClick}>{displayValue}</button>
    </div>
  );
};

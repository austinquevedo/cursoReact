interface HijoProps {
    mensaje: string
    onClick: () => void
}


export const Hijo = ({ mensaje, onClick }: HijoProps) => {

  return (
    <div>      
        <button onClick={onClick}>
            {mensaje}
        </button>
    </div>
  )
}

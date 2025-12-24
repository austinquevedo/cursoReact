interface ProductoItemProps {
    id: number,
    nombre:string,
    onDelete: (id: number) => void
}

export const ProductoItem = ({ id, nombre, onDelete }: ProductoItemProps) => {
    return (
        <div>
            <span>{nombre} (ID: {id})</span>    
            <button 
                onClick={() => onDelete(id)} 
                style={{ backgroundColor: 'red', color: 'white' }}
            >
                Eliminar
            </button>
        </div>
    )
}
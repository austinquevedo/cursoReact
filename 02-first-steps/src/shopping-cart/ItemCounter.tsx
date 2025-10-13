// se puede escribir rafc para crear este snippet
export const ItemCounter = () => {
  return(
    <section 
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 10,
        }}>
        <span style={{
            width: 150,
        }}>Nintendo switch 2</span>    
        <button>+1</button>
        <span>10</span>
        <button>-1</button>
    </section>
  );
}

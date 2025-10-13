import type { CSSProperties } from "react";


export function MyAwesomeApp(){
    const firstName = 'Jose';
    const lastName = 'Quevedo';
    const favoriteGame = ['juego1', 'juego2', 'juego3'];
    const isActive = true;
    const adderess = {
        street: 'Calle Falsa',
        number: 123
    };
    const myStyle: CSSProperties ={
        backgroundColor: '#edf4ff',
        color: '#222',
        padding: '12px 16px',
        borderRadius: isActive ? '20px' : '12px',
        boxShadow: '0 2px 6px rgba(160, 43, 99, 0.29)',
        fontFamily: 'Inter, Roboto, sans-serif',
        fontSize: '15px',
        lineHeight: '1.6',
        maxWidth: '500px',
        margin: '10px auto',
        borderLeft: '4px solidrgb(9, 62, 102)', // azul estilo Microsoft
      } ;


    return(
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <ul>
                {favoriteGame.map((game, index) => (
                <li key={index}>{index} {game}</li>
                ))}
            </ul>
            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>
            <h1>{adderess.street} {adderess.number}</h1>
            <p style={myStyle}>
                {JSON.stringify(adderess)}
            </p>
        </>

    )
    
}
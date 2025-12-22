// He agregado un comentario para ver si se actualiza el archivo
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { DentalApp } from './DentalApp'
import { FirstStepsApp } from './FirsStepsApp'
// import { Reloj } from './reloj'
// import { MyAwesomeApp } from './MyAwesomeApp'
// import { ItemCounter } from './shopping-cart/ItemCounter'
// import { CalculadoraUi } from './calculadora/CalculadoraUi'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/* <DentalApp /> */}
        <FirstStepsApp />
        {/* <Reloj /> */}
        {/* <CalculadoraUi /> */}
        {/* <MyAwesomeApp /> */}
        {/* <ItemCounter /> */}
    </StrictMode>


)



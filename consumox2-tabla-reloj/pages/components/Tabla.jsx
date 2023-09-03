import React from 'react'
import ModalDetalles from './ModalDetalles'
import Temporizador from './Temporizador'

const Tabla = ({datosAPI}) => {

    const datosTabla = datosAPI.map((elementoActual)=>{
        return(
                 <tr>
                    <th>{elementoActual.name}</th>
                    <th><ModalDetalles nombrePokemon={elementoActual.name}></ModalDetalles></th>
                 </tr>
        )
    })


  return (
    <main>
        <Temporizador></Temporizador>
    <table>
        <thead>
            <tr>
                <th>1</th>
                <th>2</th>
            </tr>
        </thead>
        <tbody>
            {datosTabla}
        </tbody>
    </table>
    </main>
  )
}

export default Tabla
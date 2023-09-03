import React from 'react'

const Tabla = ({datosAPI}) => {

    const datosTabla = datosAPI.map((elementoActual)=>{
        return(
                 <tr>
                    <th>{elementoActual.name}</th>
                    <th>Modal</th>
                 </tr>
        )
    })


  return (
    <main>
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
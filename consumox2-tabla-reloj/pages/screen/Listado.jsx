import React, { useState, useEffect } from 'react'
import Tabla from '../components/Tabla';

const Listado = () => {

    const [datosAPI, setDatosAPI] = useState([])

    useEffect(() => {
        llamadaAPI();
    }, [])

    const llamadaAPI = async () => {
        try{
        const llamada = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`);
        const datos = await llamada.json();
        // console.log(datos.results)
        setDatosAPI(datos.results);
        } catch (error){"error", error}
    }
    
  return (
    <>
    <Tabla datosAPI={datosAPI} setDatosAPI={setDatosAPI}></Tabla>
    </>
  )
}

export default Listado
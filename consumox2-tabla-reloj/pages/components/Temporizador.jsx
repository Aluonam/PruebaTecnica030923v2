mbimport React, { useEffect, useState } from 'react'

const Temporizador = () => {

// el nombre del componente deberia ser reloj
    
    const [hora, setHora] = useState()

    useEffect(() => {
      const interval = setInterval(() => {
        const fecha = new Date();
        // console.log(fecha.toLocaleString().split(",")[1])
        setHora((fecha.toLocaleString().split(",")[1]))

      }, 1000)

      return()=>clearInterval(interval);
    }, [])
    
    

  return (
    <div>
        Temporizador:
        {hora}
    </div>
  )
}

export default Temporizador

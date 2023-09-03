API: https://pokeapi.co/api/v2/pokemon?limit=100&offset=0

•	Listar los pokemos en una tabla que tenga los siguientes campos:
o	Nombre del Pokémon
o	Botón de detalles 

•	El detalle abrirá un modal de ANT que nos permite:
o	Ver la imagen del Pokémon.
o	Listar sus habilidades.

•	BONUS: añade un temporizador en la parte superior que muestre la fecha y hora actual y que se actualice cada segundo

Mejor opción **RELOJ** : usando useState y useEffect con setInterval, new Date(), toLocaleString() .split()

```javascript
    const [hora, setHora] = useState()

    useEffect(() => {
      const interval = setInterval(() => {
        const fecha = new Date();
        // console.log(fecha.toLocaleString().split(",")[1])
        setHora((fecha.toLocaleString().split(",")[1]))

      }, 1000)

      return()=>clearInterval(interval);
    }, [])
```
window.addEventListener('load', ()=> {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')
    let vientoVelocidad = document.getElementById('viento-velocidad')

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( posicion  => {
       
        lon= posicion.coords.longitude
        lat= posicion.coords.latitude

        //ubicacion actual
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=352c184b61d39e5278c728ae1af02c37`
        // console.log(url)


        //ubicacion por ciudad
        // const url = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&lang=es&units=metric&appid=352c184b61d39e5278c728ae1af02c37`

        fetch(url) 
        .then( response => { return response.json() })
        .then ( data => {
            //console.log(data.main.temp)
            let temp = Math.round(data.main.temp)
            temperaturaValor.textContent = `${temp} °C`

            let desc = data.weather[0].description
            temperaturaDescripcion.textContent = desc.toUpperCase()
  
            ubicacion.textContent = data.name
            
            vientoVelocidad.textContent = `${data.wind.speed} m/s`

      
            //iconos animados
            switch (data.weather[0].main) {
                case 'Clear':
                    iconoAnimado.scr = 'animated/day.svg'
                    console.log('limpio')
                    break;
                case 'Clouds':
                    iconoAnimado.src= 'animated/cloudy-day-1.svg'
                    console.log('NUBES')
                    break;
                 case 'Thunderstorm':
                        iconoAnimado.scr = 'animated/thunder.svg'
                        console.log('limpio')
                        break; 
                case 'Clear':
                      iconoAnimado.scr = 'animated/day.svg'
                       console.log('TORMENTA')
                        break;
               case 'Drizzle':
                        iconoAnimado.scr = 'animated/rainy-7.svg'
                        console.log('LLOVIZNA')
                        break;
             case 'Snow':
                            iconoAnimado.scr = 'animated/snowy-6.svg'
                            console.log('NIEVE')
                            break;
              case 'Atmosphere':
                   iconoAnimado.scr = 'animated/weather.svg'
                      console.log('LLOVIZNA')
                      break;
                      case 'Drizzle':
                        iconoAnimado.scr = 'animated/rainy-7.svg'
                        console.log('ATMOSFERA')
                        break;
                        case 'Rain':
                            iconoAnimado.src='animated/rainy-7.svg'
                            console.log('LLUVIA');
                            break;
            default:
                iconoAnimado.src='animated/cloudy-day-1.svg'
                console.log('por defecto');

            }
        })
        .catch (error => {
            console.log(error)
        })
    })
}

})
import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/Weather/WeatherInfo'


function App() {
  const[weather, setWeather] = useState()
  const inputRef = useRef()
  

  async function searchCity(){
    const city = inputRef.current.value
    const key = "9d93dfe4d3c9bcc108aa7f7c7afc6cf3"
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)
    
  }

  return (
      <>    
      <div className='container'>
        <h1>Previsão do Tempo</h1>
        <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
        <button onClick={searchCity}>Buscar</button>

        {weather && <WeatherInfo weather={weather}/>}
        
      </div>
      </>
  )
}

export default App

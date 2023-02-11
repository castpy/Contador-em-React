import './App.css'
import Titulo from './assets/components/Titulo'
import Counter from './assets/components/Counter';
import imgFundo from './assets/background.jpg'

import useCountdown from './hooks/useCountdown';

function App() {
  const [day, hour, minute, second] = useCountdown('Jan 1, 2024 00:00:00')
  return (
    <div className="App" style={{backgroundImage: `url(${imgFundo})`}}>
      <div className='container'>
        <Titulo titulo="Contagem Regressiva para 2024"/>
        <div className="countDownContainer">
          <Counter titulo="Dias" numero={day}/>
          <Counter titulo="Horas" numero={hour}/>
          <Counter titulo="Minutos" numero={minute}/>
          <Counter titulo="Segundos" numero={second}/>
        </div>
      </div>
    </div>
  );
}

export default App

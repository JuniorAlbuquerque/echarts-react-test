import { useState } from 'react';
import './App.css';
import Chart from './components/Chart';
import Chart2 from './components/Chart2';

function App() {
  const [teste, setTeste] = useState('')

  const [data, setData] = useState([120, 200, 150, 80, 70, 110, 130])
  const [data2, setData2] = useState([20, 140, 50, 40, 220, 70, 80])

  const changeData = () => {
    setData([20, 10, 40, 120, 60, 30])
  }

  const changeData2 = () => {
    setData2([25, 109, 420, 20, 50, 10])
  }

  return (
    <div style={{padding: 20}}>
      <input type="text" value={teste} onChange={e => setTeste(e.target.value)} />

      <div>
        <Chart data={data}/>
        <Chart2 data={data2} />
      </div>

      <button onClick={changeData}>Change Chart 1</button>
      <button onClick={changeData2}>Change Chart 2</button>
    </div>
  );
}

export default App;

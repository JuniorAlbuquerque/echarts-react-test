import { useState } from 'react';
import './App.css';
import Chart from './components/Chart';
import Chart2 from './components/Chart2';

function App() {
  const [teste, setTeste] = useState('')

  return (
    <div style={{padding: 20}}>
      <input type="text" value={teste} onChange={e => setTeste(e.target.value)} />

      <div>
        <Chart />
        <Chart2 />
      </div>

      <div>Alo</div>
    </div>
  );
}

export default App;

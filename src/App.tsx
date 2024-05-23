import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/Counter'
import { ButtonComponent } from './components/ButtonComponent'

function App() {
  const [count, setCount] = useState(0)
  const [ inputValue, setInputValue] = useState(1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value))
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <Counter count={count} />
        <ButtonComponent onClick={() => setCount(count + inputValue)} label='Sumar'/>
        <ButtonComponent onClick={() => setCount(count - inputValue)} label='Restar'/>
        <ButtonComponent onClick={() => setCount(0)} label='Reset'/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

import useCount from '../src/hooks/useCount.js'
import './App.css'

function App() {
  const [count, increment] = useCount()

  return (
    
    <>
      <h1>Vite + React </h1>
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

    </>
  )
}

export default App

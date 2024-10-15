import { useState } from 'react'

function Calculator() {
  const [count, setCount] = useState(0)
  const [dia, setDia] = useState(0)
  const [sfm, setSfm] = useState(0)
  const [cpt, setCpt] = useState(0)
  const [numTeeth, setNumTeeth] = useState(0)

  return (
    <>
      <div className="calculator">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default Calculator
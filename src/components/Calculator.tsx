import { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [dia, setDia] = useState(0)
  const [sfm, setSfm] = useState(0)
  const [cpt, setCpt] = useState(0)
  const [numTeeth, setNumTeeth] = useState(0)
  const [rpm, setRpm] = useState(0)
  const [ipm, setIpm] = useState(0)

  function results () {
    const rpm = (sfm * 3.82) / dia
    setRpm(rpm)
    setIpm(rpm * numTeeth * cpt)
    return
  }

  return (
    <>
      <div className='calculator'>
        <input className='results' name='rpm' type='number' placeholder='RPM' disabled value={rpm || undefined}/>
        <input className='results' name='ipm' type='number' placeholder='IPM' disabled value={ipm || undefined}/>
        <input name='dia' type='number' placeholder='diameter' onChange={e => setDia(parseFloat(e.target.value))}/>
        <input name='sfm' type='number' placeholder='SFM' onChange={e => setSfm(parseFloat(e.target.value))}/>
        <input name='cpt' type='number' placeholder='CPT' onChange={e => setCpt(parseFloat(e.target.value))}/>
        <input name='teeth' type='number' placeholder='number of teeth' onChange={e => setNumTeeth(parseFloat(e.target.value))}/>
        <button onClick={() => results()}
        >
          Calculate
        </button>
      </div>
    </>
  )
}

export default Calculator
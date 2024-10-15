import { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [dia, setDia] = useState(0)
  const [sfm, setSfm] = useState(0)
  const [cpt, setCpt] = useState(0)
  const [numTeeth, setNumTeeth] = useState(0)
  const [rpm, setRpm] = useState(0)
  const [ipm, setIpm] = useState(0)

  return (
    <>
      <div className='calculator'>
        <input className='results' name='rpm' type='number' placeholder='RPM' disabled value={rpm || undefined}/>
        <input className='results' name='ipm' type='number' placeholder='IPM' disabled value={ipm || undefined}/>
        <input name='dia' type='number' placeholder='diameter' onChange={e => setDia(parseFloat(e.target.value))}/>
        <input name='sfm' type='number' placeholder='SFM' onChange={e => setSfm(parseFloat(e.target.value))}/>
        <input name='cpt' type='number' placeholder='CPT' onChange={e => setCpt(parseFloat(e.target.value))}/>
        <input name='teeth' type='number' placeholder='number of teeth' onChange={e => setNumTeeth(parseFloat(e.target.value))}/>
        <button onClick={() => {
            setRpm((sfm * 3.82) / dia)
            setIpm(rpm * numTeeth * cpt)
          }}
        >
          Calculate
        </button>
      </div>
    </>
  )
}

export default Calculator


// rpmCalc() {
//   this.rpm = (this.sfm * 3.82) / this.dia;
// }

// ipmCalc() {
//   this.ipm = this.rpm * this.numTeeth * this.cpt;
// }
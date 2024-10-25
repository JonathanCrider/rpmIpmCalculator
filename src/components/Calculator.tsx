import { useReducer, useRef } from 'react'
import { SET_DIA, SET_SFM, SET_CPT, SET_NUM_TEETH, SET_RPM, SET_IPM, type CalculatorState, type Action } from './Calculator.types'
import './Calculator.css'

function reducer(state: CalculatorState, action: Action ) {
  switch (action.type) {
    case SET_DIA:
      return { ...state, dia: action.payload };
    case SET_SFM:
      return { ...state, sfm: action.payload };
    case SET_CPT:
      return { ...state, cpt: action.payload };
    case SET_NUM_TEETH:
      return { ...state, numTeeth: action.payload };
    case SET_RPM:
      return { ...state, rpm: action.payload };
    case SET_IPM:
      return { ...state, ipm: action.payload };
    default:
      return state;
  }
}

function Calculator() {
  const [state, dispatch] = useReducer(reducer, {
    dia: 0,
    sfm: 0,
    cpt: 0,
    numTeeth: 0,
    rpm: 0,
    ipm: 0
  })
  
  const refDia = useRef<HTMLInputElement>(null)
  const refSfm = useRef<HTMLInputElement>(null)
  const refCpt = useRef<HTMLInputElement>(null)
  const refTeeth = useRef<HTMLInputElement>(null)

  function results () {
    const { sfm, dia, numTeeth, cpt } = state
    const rpm = (sfm * 3.82) / dia
    dispatch({ type: SET_RPM, payload: rpm })
    dispatch({ type: SET_IPM, payload: rpm * numTeeth * cpt })
    return
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    previous: React.RefObject<HTMLInputElement> | null,
    next: React.RefObject<HTMLInputElement> | null
  ) => {
    console.log(e.key)
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault()
      if (e.key === 'ArrowUp' && previous?.current) previous.current.focus()
      else if (next?.current) next.current.focus() 
    }
    if (e.key === 'Enter') {
      results()
    }
  }

  return (
    <>
      <div className='calculator'>
        <div className='row'>
          <label>RPM</label>
          <input className='results' name='rpm' type='number' placeholder='RPM' disabled value={state.rpm || undefined}/>
        </div>
        <div className='row'>
          <label>IPM</label>
          <input className='results' name='ipm' type='number' placeholder='IPM' disabled value={state.ipm || undefined}/>
        </div>
        <div className='row'>
          <input name='dia' type='number' placeholder='diameter' ref={refDia} onKeyDown={(e) => handleKeyDown(e, refTeeth, refSfm)} onChange={e => dispatch({ type: SET_DIA, payload: +e.target.value})}/>
        </div>
        <div className='row'>
          <input name='sfm' type='number' placeholder='SFM' ref={refSfm} onKeyDown={(e) => handleKeyDown(e, refDia, refCpt)} onChange={e => dispatch({ type: SET_SFM, payload: +e.target.value})}/>
        </div>
        <div className='row'>
          <input name='cpt' type='number' placeholder='CPT' ref={refCpt} onKeyDown={(e) => handleKeyDown(e, refSfm, refTeeth)} onChange={e => dispatch({ type: SET_CPT, payload: +e.target.value})}/>
        </div>
        <div className='row'>
          <input name='teeth' type='number' placeholder='number of teeth' ref={refTeeth} onKeyDown={(e) => handleKeyDown(e, refCpt, refDia)} onChange={e => dispatch({ type: SET_NUM_TEETH, payload: +e.target.value})}/>
        </div>
        <div className='row'>
          <button onClick={() => results()}>
            Calculate
          </button>
        </div>
      </div>
    </>
  )
}

export default Calculator
export const SET_DIA: string = 'SET_DIA'
export const SET_SFM: string = 'SET_SFM'
export const SET_CPT: string = 'SET_CPT'
export const SET_NUM_TEETH: string = 'SET_NUM_TEETH'
export const SET_RPM: string = 'SET_RPM'
export const SET_IPM: string = 'SET_IPM'

export type CalculatorState = {
  dia: number
  sfm: number
  cpt: number
  numTeeth: number
  rpm: number
  ipm: number
}

export type Action = {
  type: string
  payload: number
}
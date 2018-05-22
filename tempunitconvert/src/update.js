import * as R from 'ramda'

export const MSGS = {
  LEFT_VALUE_INPUT: 'LEFT_VALUE_INPUT',
  RIGHT_VALUE_INPUT: 'RIGHT_VALUE_INPUT',
  LEFT_UNIT_CHANGED: 'LEFT_UNIT_CHANGED',
  RIGHT_UNIT_CHANGED: 'RIGHT_UNIT_CHANGED'
}

export function leftValueInputMsg (leftValue) {
  return {
    type: MSGS.LEFT_VALUE_INPUT,
    leftValue
  }
}

export function rightValueInputMsg (rightValue) {
  return {
    type: MSGS.RIGHT_VALUE_INPUT,
    rightValue
  }
}

export function leftUnitChangedMsg (leftUnit) {
  return {
    type: MSGS.LEFT_UNIT_CHANGED,
    leftUnit
  }
}

export function rightUnitChangedMsg (rightUnit) {
  return {
    type: MSGS.RIGHT_UNIT_CHANGED,
    rightUnit
  }
}

const toInt = R.pipe(parseInt, R.defaultTo(0))

function update (msg, model) {
  switch (msg.type) {
    case MSGS.LEFT_VALUE_INPUT:
      if (msg.leftValue === '') {
        return { ...model, souceLeft: true, leftValue: '', rightValue: '' }
      }
      const leftValue = toInt(msg.leftValue)
      return { ...model, souceLeft: true, leftValue }
    case MSGS.RIGHT_VALUE_INPUT:
      if (msg.rightValue === '') {
        return { ...model, souceLeft: false, leftValue: '', rightValue: '' }
      }
      const rightValue = toInt(msg.rightValue)
      return { ...model, souceLeft: false, rightValue }
    case MSGS.LEFT_UNIT_CHANGED:
      const { leftUnit } = msg
      return { ...model, leftUnit }
    case MSGS.RIGHT_UNIT_CHANGED:
      const { rightUnit } = msg
      return { ...model, rightUnit }
  }
  return model
}

function FtoC (temp) {
  return 5 / 9 * (temp - 32)
}

function CtoF (temp) {
  return 9 / 5 * temp + 32
}

function KtoC (temp) {
  return temp - 273.15
}

function CtoK (temp) {
  return temp + 273.15
}

const FtoK = R.pipe(FtoC, CtoK)
const KtoF = R.pipe(KtoC, CtoF)

const UnitConversions = {
  Celsius: {
    Fahrenheit: CtoF,
    Kelvin: CtoK
  },
  Fahrenheit: {
    Celsius: FtoC,
    Kelvin: FtoK
  },
  Kelvin: {
    Celsius: KtoC,
    Fahrenheit: KtoF
  }
}
export default update

import * as R from 'ramda'

import {
  leftValueInputMsg,
  rightValueInputMsg
} from './update'

import { h } from 'virtual-dom'
import hh from 'hyperscript-helpers'

const {
  div,
  h1,
  pre,
  input,
  select,
  option
} = hh(h)

const UNITS = ['Fahrenheit', 'Celsius', 'Kelvin']

function view(dispatch, model) {
  return div({ className: 'mw6 center' }, [
    h1({ className: 'f2 pv2 bb' }, 'Temperature Unit Converter'),
    div({ className: 'flex' }, [
      unitSection(dispatch, model.leftUnit, model.leftValue, leftValueInputMsg),
      unitSection(dispatch, model.rightUnit, model.rightValue, rightValueInputMsg)
    ]),
    pre(JSON.stringify(model, null, 2)),
  ])
}

function unitSection (dispatch, unit, value, inputMsg) {
  return div({ className: 'w-50 ma1' }, [
    input({
      type: 'text',
      className: 'db w-100 mv2 pa2 input-reset ba',
      value,
      oninput: e => dispatch(inputMsg(e.target.value))
    }),
    select(
      {
        className: 'db w-100 pa2 ba input-reset br1 bg-white ba b-black',
      },
      unitOptions(unit)
    )
  ])
}

function unitOptions (selectedUnit) {
  return R.map(
    unit => option({ value: unit, selected: selectedUnit === unit }, unit),
    UNITS
  )
}

export default view

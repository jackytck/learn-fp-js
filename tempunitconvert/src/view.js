import * as R from 'ramda'

import { h } from 'virtual-dom'
import hh from 'hyperscript-helpers'

const {
  div,
  h1,
  pre,
} = hh(h)


function view(dispatch, model) {
  return div({ className: 'mw6 center' }, [
    h1({ className: 'f2 pv2 bb' }, 'Temperature Unit Converter'),
    pre(JSON.stringify(model, null, 2)),
  ])
}

export default view

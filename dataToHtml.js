const MEALS = [
  { description: 'Breakfast', calories: 460 },
  { description: 'Snack', calories: 180 },
  { description: 'Lunch', calories: 600 },
]

const { thead, td, th, tr, tbody, table } = tags

function mealTable (meals) {
  return table({ className: 'mw5 center w-100 collapse' }, [
    mealHeader,
    mealBody('', meals)
  ])
}

const mealHeader = thead(headerRow)

const headerRow = tr([
  cell(td, 'pa2 tl', 'Meal'),
  cell(td, 'pa2 tr', 'Calories')
])

function cell (tag, className, value) {
  return tag({className}, value)
}

function mealBody (className, meals) {
  const rows = R.map(R.partial(mealRow, ['stripe-dark']), meals)
  const rowsWithTotal = R.append(totalRow(meals), rows)
  return tbody({ className }, rowsWithTotal)
}

function mealRow (className, meal) {
  return tr({ className }, [
    cell(td, 'pa2', meal.description),
    cell(td, 'pa2 tr', meal.calories),
  ])
}

function totalRow (meals) {
  const total = R.pipe(
    R.map(meal => meal.calories),
    R.reduce((acc, calories) => acc + calories, 0)
  )(meals)

  return tr({ className: 'bt b' }, [
    cell(td, 'pa2 tr', 'Total'),
    cell(td, 'pa2 tr', total)
  ])
}

const node = document.getElementById('app')
const view = mealTable(MEALS)
node.appendChild(view)

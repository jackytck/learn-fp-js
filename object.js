// 1. create a meal object for a snack
// print both the snacks description
// and calories to the console
const meal = {
  description: 'Reese Peanut Butter Cup',
  calories: 500
}

console.log(meal.description, meal.calories)

/*
   2. create a new constant named
   updatedCalories, setting it to 150
   plus the calories used in the above
   meal object.
   Print the value of updatedCalories
   to the console.

   Note: use the dot notation syntax as
   part of the expression
*/
const updatedCalories = meal.calories + 150
console.log(updatedCalories)

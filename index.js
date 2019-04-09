// Example 1 
function processWord(word) {
    console.log(`Hello, ${word}!`)
}

const wordA = 'Haku'
const wordB = 'Healthy'

processWord(`${wordB} ${wordA}`)


// Example 2
// Health Haku Daily Water Intake Calculator
let recommendedWaterIntakePerKG = 0.0435;
let userWeight = prompt('How much you think your body weight?');

const waterIntakeCalculator = function(weight) {
    let userWaterGoal = Math.round(weight * recommendedWaterIntakePerKG)
    return userWaterGoal
}

// Test Cases, units in liters
document.getElementById("water-goal").innerHTML = `You need to drink ${waterIntakeCalculator(userWeight)} liters of water per day` 
console.log(waterIntakeCalculator(userWeight))
console.log(waterIntakeCalculator())
console.log(waterIntakeCalculator(70))


// Example 3 
const addMarks = (text, mark, times) => {
    let newText = text

    for (let i = 0; i <= times; i++) {
        newText += mark
    }
    console.log(newText)
}

addMarks('Hello, I am Healthy Haku', '!' , 1)
addMarks('I will drink more water', '!', 2)


// Example 4
const showFoodNutrition = (food = 'unknown', nutrition) => {
    const foodNutrition = `${food} contains ${nutrition}`

    return foodNutrition
}

const rice = showFoodNutrition('rice', 'carbohydrates')
const egg = showFoodNutrition('egg', 'proteins')

console.log(rice)
console.log(egg)
// Example 1 
// function logName(name) {
//     console.log(`Hello, ${name}!`)
// }

// const nameA = 'Alpha'
// const nameB = 'Betty'

// logName(nameA)
// logName(nameB)

// Example 2

let recommendedWaterIntakePerKG = 0.184;
let userWeight = prompt('How much you think your body weight?');

const waterIntakeCalculator = function(weight) {
    let userWaterGoal = Math.round(weight * recommendedWaterIntakePerKG)
    return userWaterGoal
}

// Test Cases, units in cups
document.getElementById("water-goal").innerHTML = `You need to drink ${waterIntakeCalculator(userWeight)} cups of water per day` 
console.log(waterIntakeCalculator(userWeight))
console.log(waterIntakeCalculator(65))
console.log(waterIntakeCalculator(70))


// Example 3 
// const addMarks = (text, mark, times) => {
//     let newText = text

//     for (let i = 0; i <= times; i++) {
//         newText += mark
//     }
//     console.log(newText)
// }

// addMarks('Hello', '!', 1)
// addMarks('Hello', '!', 3)
// addMarks('How are you', '?', 1)
// addMarks('How are you', '?', 2)

// // Example 4
// const showNameWithAge = (name = 'Unknown', age = 0) => {
//     const nameWithAge = `${name} is ${age} year(s) old`

//     return nameWithAge
// }

// const alpha = showNameWithAge
// const betty = showNameWithAge
// const gamma = showNameWithAge

// console.log(alpha)
// console.log(betty)
// console.log(gamma)
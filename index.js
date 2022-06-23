// exercise 1

const cat = {
  name: "Garfield",
  age : 3,
  isCute : true
}

console.log(cat)
console.log(cat.age)

if (cat.isCute){
  console.log("So cute!")
}else{
  console.log("Ugly cat !")
}

// Exercise 2

const cat2 = {
  name: "Tony",
  age : 5,
  isCute : false
}

let cats = [cat, cat2]

console.log(cat.age)
console.log(cat["age"])

console.log(cat2.isCute)
console.log(cat2["isCute"])

// exercise 3

const checkIfEven = (num) => {
  if(num % 2 == 0){
    console.log("Even")
  }else{
    console.log("Odd")
  }
}

checkIfEven(10)

// exercise 4

const compare = (x, y) => {
  if( x > y){
    console.log(`${x} is bigger than ${y}`)
  }else if (y > x){
    console.log(`${y} is bigger than ${x}`)
  }else{
    console.log("Both are same")
  }
}

compare(2, 4)
compare(6, 4)
compare(4, 4)

// exercise 5

const addUp = (num) => {
  let total = 0
  for (let i = 0; i <= num; i++){
    total += i
  }
  console.log(total)
}

addUp(12)

// exercise 6

const format = (num) => {
  // let mins = Math.floor(num/60)
  // let hrs = Math.floor(mins/60)

  let hrs = Math.floor(num/3600)
  let mins = Math.floor((num/60) - (hrs*60))
  let secs = num-(((hrs*60) + mins)*60)

  console.log(`${hrs}:${mins}:${secs}`)
}

format(3700)

// exercise 7

const generatePassword = (num) => {

  if(num < 6 || num > 15){
    console.log("Error !")
  }else{
    let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    const min = 0
    const max = letters.length - 1

    let password = ""

    for (let i = 0; i < num; i++){

      const random = Math.floor(Math.random() * max) + min
      password += letters[random]
    }
    console.log(password.toUpperCase())
  }
}

generatePassword(15)

// exercise 8

const launchDice = (numberOfDice) => {

  const min = 1
  const max = 6

  let diceTotal = 0

  for (let i = 0; i < numberOfDice; i++){

    const random = Math.floor(Math.random() * max) + min
    diceTotal += random
  }
  return diceTotal
}

let player1 = launchDice(5)
let player2 = launchDice(5)

if( player1 > player2){
  console.log("Player 1 wins !")
}else if( player1 < player2){
  console.log("Player 2 wins !")
}else{
  console.log("Tie !")
}
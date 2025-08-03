const name = "Abhisek"
const repoCount = 12

// console.log("My name is " + name + " Git repo count is " + repoCount);(Old method)

   // we can use "backtick"(``) for declaring a string.

console.log(`My name is ${name} and my git repo count is ${repoCount} .`);

// New way to declar a string

const gameName = new String('BattleGround')

// Methods of String

console.log(gameName[0])

console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-11,4)
console.log(anotherString);

const newStringOne = "  Abhisek  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://abhisek.com/abhisek%20samal"
console.log(url.replace('%20','-'))


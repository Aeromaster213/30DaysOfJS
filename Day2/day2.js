let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true
//const PI = 3.14
const gravity = 9.81

//Math Object- provides lots of classes
const PI = Math.PI
console.log(PI)

//rounding - 0.5 above - next number, 0.5 lower - greatest integer function
console.log(Math.round(PI))
console.log(Math.round(9.5))
console.log(Math.floor(PI))
console.log(Math.ceil(PI))

console.log(Math.min(-2, 0, -1.3, -0.33, 2))
console.log(Math.max(-2, 0, -1.3, -0.33, 2))

console.log('Watch this')
console.log(Math.max(-0, 0.000, 0.00, 0, +0))

const randNum = Math.random() 
//create a random nuber between 0 to 0.999999

const randNum2 = Math.floor(Math.random() * 21)//rand  between 0 and 20
console.log(randNum, randNum2)

console.log(Math.abs(-100))
console.log(Math.abs(-0))

console.log(Math.sqrt(101))

console.log(Math.pow(3, 33))

console.log(Math.E)

console.log(Math.log(2)) //natural logartihm
console.log(Math.log(100) / Math.log(10)) //should give 2

console.log(Math.log2(3))

console.log(Math.LN2)
console.log(Math.LN10)

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki. \
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)






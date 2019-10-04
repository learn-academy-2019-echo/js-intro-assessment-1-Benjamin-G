// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.

const containsLetterInString = (letter, str) => str.includes(letter)

containsLetterInString('B', mantra)

// 1b. Write the code that determines if there is an 'x' in mantra.

containsLetterInString('x', mantra)

// 1c. Write the code that determines if there is a 'v' in mantra.

containsLetterInString('v', mantra)

// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.

// ^^^ I did that first ^^^

// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

const longerString = (str1, str2) => str1.length > str2.length ? str1 : str2


// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

const twoStringArrayGenerator = (str1, str2) => [str1, str2]

const multiStringArrayGenerator = (...args) => [...args]


// 2c. STRETCH: Write a function that returns the two variables in all lowercase letters. Expected output: "snoopy garfield"

const twoStringLowerCaseGenerator = (str1, str2) => [str1, str2].map(word => word.toLowerCase()).join(' ')

const multiStringLowerCaseGenerator = (...args) => [...args].map(word => word.toLowerCase()).join(' ')

// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.

for(let i = 0; i < myMessage.length; i++){
    console.log(myMessage[i])
}

// 3b. Write the code that logs each letter of the message using map.

myMessage.split('').forEach(letter => console.log(letter))  //Map is not needed here since we are just logging

// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.
let i = 0
do{
    console.log(myMessage[i])
    i++
}while(i < myMessage.length)

// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().

// Map is needed only if you need to return an array therefor using map is not a correct way to log each value in the string. 


// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

const vowelRegex = /[aeiou]/gi

const removeVowelsFromString = str => str.replace(vowelRegex,'')

removeVowelsFromString(testString)

// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.

const removeVowelsFromStringEnterprise = str => {
    if(typeof str !== "string"){
        throw 'the variable is not a string'
    }
    try{
        return str.replace(vowelRegex,'')
    } catch (err) {
        console.error(err)
    }
}

//removeVowelsFromStringEnterprise(true)
removeVowelsFromStringEnterprise(testString)


// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]




//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"




//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

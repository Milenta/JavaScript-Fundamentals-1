let js = 'amazing';
if (js === 'amazing') alert('JavaScript is fun')

console.log(40 + 8 + 23 - 10); // show in console

/***************************
 *  ---  Console log  ---  *
 ***************************/

console.log(40 + 8 + 23 - 10); // show in console
console.log('Marko')
console.log(23)

/*************************
 *  ---  Variables  ---  *
 *************************/

let firstName = 'Milenta'
console.log(firstName)

let myFirstJob = 'programer' // good naming - descriptive
let myCurrentJob = 'qa' // good naming - descriptive

let job1 = 'programer' // bad naming - not descriptive
let job2 = 'qa' // bad naming - not descriptive

console.log(myFirstJob)

let myCountry = 'Serbia'
let myContinent = 'Europe'
let myCountryPopulation = 7000000

console.log('my country is ' + myCountry)
console.log('my continent is ' + myContinent)
console.log('my country population is ' + myCountryPopulation)

/* this will cause a error. javaScript is executed line by line in order.   */
/* so val is defined after console log which is wrong                       */
/* 
console.log(javascript) 
let javascript = true 
*/

/* this is ok */
let javascript = true
console.log(javascript)
console.log(typeof true)
console.log(typeof javascript)
javascript = 'marko'
console.log(typeof javascript)
console.log(typeof 'milos')
let year
console.log(year)
console.log(typeof year)
year = 1999
console.log(year)
console.log(typeof year)

/******************************
 *  ---  Math operators  ---  *
 ******************************/

const now = 2024
const ageMarko = now - 1989
const ageMirko = now - 1954
console.log(ageMarko, ageMirko)
console.log(ageMarko * 2, ageMirko / 10.5, 2 ** 3) // 2 ** 3 = 2 x 2 x 2 = 8
const firstName2 = "mare"
const lastName2 = "M"
console.log(firstName2 + ' ' + lastName2)

/***********************************
 *  ---  Assigment operators  ---  *
 ***********************************/

let x = 10 + 5 // x = 15
x += 10 // x = 15 + 10 = 25
x *= 4 // x = x * 4
x++ // x = x + 1
x-- // x = x - 1

/************************************
 *  ---  Comparison operators  ---  *
 ************************************/

console.log(ageMarko > ageMirko) // true or false
console.log(ageMarko < ageMirko) // true or false
console.log(ageMarko >= ageMirko) // true or false
console.log(ageMarko <= ageMirko) // true or false

/*******************************
 *  ---  Template string  ---  *
 *******************************/

const nameTs = 'Marko'
const birthYearTs = 1989
const yearNowTs = 2024
const jobTs = 'QA'
const oldWay = "I'm " + nameTs + ", a " + (yearNowTs - birthYearTs) + " old " + jobTs
const newWayTs = `I'm ${nameTs}, a ${yearNowTs - birthYearTs} old ${jobTs}`
console.log(oldWay)
console.log(newWayTs)
console.log('String with \n\
multiple \n\
lines')
console.log(`String with
multiple 
lines`)

/******************************************
 *  ---  Taking desizions - if else  ---  *
 ******************************************/

const birthMarko = 2015
const currentYear = 2024

if (currentYear - birthMarko >= 18) { console.log('can take drivers licence') }
else { console.log(`there is ${18 - (currentYear - birthMarko)} more years untill you can take drivers licence`) }

// drugi nacin

const age = 14

if (age >= 19) { console.log('Sarah is old enough to drive') }
else { console.log(`Sarah is not old enough to drive, she needs ${18 - age} more years`) }

const birthYearJohn = 1997
let century
if (birthYearJohn <= 2000) {
    century = 20
} else {
    century = 21
}
console.log('century is ' + century)

/*****************************************************************************************
 *  ---  Type conversion - rucno menjamo tip vrednosti u broj ili string u glavnom  ---  *
 *****************************************************************************************/

const inputYear = 1992
console.log(inputYear + 18) // 199218
console.log(Number(inputYear) + 18) // 2010
console.log(Number('Jonas')) // rezultat je NaN - skracenica od not a number
console.log(String(23)) // '23' dobijemo string 23

/****************************************************************
 *  ---  Type coercion - automatski menjamo tip vrednosti  ---  *
 ****************************************************************/

console.log('I am ' + 23 + ' years old.') // plus menja broj u string automatski
console.log('23' - '10' - 2) // broj 11 - minus menja stringove u brojeve automatski
console.log('20' * '2') // broj 40 - mnozenje i deljenje menja stringove u brojeve

/********************************
 *  ---  Truthy and falsy  ---  *
 ********************************/

// 5 falsy values : 0, '', undefined, null, NaN - ako ove vrednosti pretvorimo u Boolean dobijemo false

let money = 0
if (money) { // bollean money ima vrednost false jer je 0 onda ide u else 
    console.log('Dont spend it all')
}
else {
    console.log('You should get a job')
}

let height
if (height) { // height je nedefinisana i zato je false pa ide u else
    console.log('height is defined')
} else {
    console.log('height is undefined')
}

/***********************************************
 *  ---  Loose and strict equal == & ===  ---  *
 ***********************************************/

const ageM = 18
if (ageM === 18) console.log('you turned 18') // mora da se poklapa vrednost i tip varijable
if (ageM == '18') console.log('you turned 18') // mora da se poklapa samo vrednost a tip ne mora

const faforite = Number(prompt('Whats your favorite number?'))
console.log(faforite)
console.log(typeof faforite)

if (faforite === 23) console.log('23 is good number')
else if (faforite === 7) console.log('you choose 7')
else if (faforite === 9) console.log('9 is avrage number')
else if (faforite !== 0) console.log('number is not 0')
else console.log('you did not choose 23, 7 or 9')

const hasDriverLicence = true
const hasGoodVision = false
const isTierd = true

/*****************************************************
 *  ---  Operators : main 3 are : and, or, not  ---  *
 *****************************************************/

if (hasDriverLicence && hasGoodVision && !isTierd) console.log('Sarah can drive')
else console.log('somebody else should drive')

/*********************************
 *  ---  Swithch statemant  ---  *
 *********************************/

const day = 'Frday'

switch (day) {
    case 'Monday': console.log('It is Monday'); break;
    case 'Tuesday': console.log('It is Tuesday'); break;
    case 'Wednesday': console.log('It is Wednesday'); break;
    case 'Thursday':
    case 'Friday': console.log('It is Thursday or Friday'); break;
}

/********************************
 *  ---  Ternary operator  ---  *
 ********************************/

const ageMara = 23
// ima tri uslova. prvi je sad >= onda ide ? pa odgovor za true, oda : pa odgovor za false. mora da ima samo jednu liniju za odgovore
age >= 18 ? console.log("mara drinks wine") : console.log('mara drinks water')

// ovako se zaista koristi u programiranju :
const drink = age >= 18 ? "wine" : "water" // dodeljuje se vrednost konstanti na osnovu ternary operatora - if else operatora
console.log(drink) // wine

// ternary operator zamenjuje if else na ovaj nacin (i menja ovde 3 reda za jedan)
let drink2
if (age >= 18) drink2 = 'wine'
else drink2 = 'wather'

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`)


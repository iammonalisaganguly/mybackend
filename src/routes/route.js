// const express = require('express');
// const router = express.Router();///test-you
// //import module
// const welcome = require('../logger/logger')
// const utill = require('../util/helper')
// const formatter = require('../validator/formatter')
// const x = require('lodash')
// //src/routes/validator/formatter.js
// router.get('/test-me', function (req, res) {
//     //Calling the components of a different custom mod
//     welcome.myFunction()
//     utill.printDate()
//     utill.printMonth()
//     utill.printBatch()
//     formatter.trims()

//  const allMonth =["January","February","March","April","May","June","July","August","September","October","November","December"]
//  console.log(x.chunk(allMonth,4))
 
//  const arr = [1,3,5,7,9,11,13,15,17,19]
//  console.log(x.tail(arr,9)) 
 
//  let a=[1,2]
//     let b=[2,3]
//     let c=[3,4]
//     let d=[4,5]
//     let e=[5,6]
//     console.log(x.union(a,b,c,d,e))

//     const object = [["horror","The Shining"],["darama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
//     console.log(x.fromPairs(object))
//     res.send('My first ever api!')

// });

// module.exports = router;


const print=require("../logger/logger")
const lodash = require('lodash');
const functions=require("../util/helper")
const formaters=require("../validator/formatter")
const express = require('express');
const router = express.Router();///test-you

router.get('/test-me', function (req, res) {

print.printWelcome()
functions.Date()
functions.Month()
functions.BatchInfo()
formaters.Trim()





   // console.log(functions.getBatchInfo()+" "+functions.printDate()+" "+functions.printMonth())

   // print.printWelcome("Aman Bansal")

   // formaters.trim()
   // formaters.changeToLowerCase()
   // formaters.changeToUpperCase()
   // res.send('My first ever API')

   

const months=['January','February','March','April','May','June','July','August','September','October','November','December']
 console.log(lodash.chunk(months,3))


const numbers=[0,1,2,3,4,5,6,7,8,9]
console.log(lodash.tail(numbers))

const arr1=[1,1,2,2,3,4]
const arr2=[5,5,4,5,7,6]
const arr3=[4,5,7,8,8,8]
const arr4=[4,5,6,7,8,9]
const arr5=[7,8,9,4,5,6]
 console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))


const pairs=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
 const resultObject=lodash.fromPairs(pairs)
 console.log(resultObject)


   res.send('This is my first ever API')
});

module.exports = router;
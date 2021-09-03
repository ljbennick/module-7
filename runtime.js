const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();



perf.start();                     // Starts timer
doublerAppend(largeArray);


perf.start();
doublerInsert(largeArray);


perf.start();                     // Starts timer
doublerAppend(mediumArray);


perf.start();
doublerInsert(mediumArray);


perf.start();                     // Starts timer
doublerAppend(smallArray);


perf.start();
doublerInsert(smallArray);


perf.start();                     // Starts timer
doublerAppend(tinyArray);


perf.start();
doublerInsert(tinyArray);


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

console.log('Results for the largeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

console.log('Results for the mediumArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

console.log('Results for the smallArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


function hasUniqueChars(str){
    for(let i=0; i< str.length; i++){
        for(let j = i +1; j < str.length; j++){
            if(str[i] == str[j]){
                return false
                // return console.log(`The string: "${str}"  does not contain all unique characters`);
            }
        }
    }
    return true
    // return console.log(`The string:  "${str}"  has all unique characters`);

}


hasUniqueChars("Jaxon")
hasUniqueChars("Alyssa")
 

perf.start()
hasUniqueChars("Jaxon")
let resultsTrue = perf.stop()

perf.start()
hasUniqueChars("Alyssa")
let resultsFalse = perf.stop()

console.log('Results for true')
console.log('true', resultsTrue.preciseWords)
console.log('Results for false')
console.log('false', resultsFalse.preciseWords)


// Results for true
// true 5.28 μs
// Results for false
// false 3.971 μs

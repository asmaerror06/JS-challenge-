// Task 1-2


// If-else statement

const num = 4;
if(num > 4) {
    console.log("Number is Positive")
} else if(num < 4) {
    console.log("Number is Negative")
}else{
    console.log("Number is Zero")
        }


    // Task 2

    const age = 18;
    if(age > 18) {
        console.log("Eligible for vote");
    }else {
        console.log("Not Eligible for vote");
    }


    // Task 3

let nest = 2;
let nest1 = 4;
let nest2 = 7;

if(nest1>nest){
    console.log("Nested number is great");
} else if(nest2 > nest1){
    console.log("Nested number is greatest");
}else {
    console.log("Nested number is greater");
}

// Task 4

const getDay = 1;

switch(getDay) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;

}
console.log(day);

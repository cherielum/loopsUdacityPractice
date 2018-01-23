//while loops

var x = 1; 
while(x<= 10000) {
    console.log(x +" mississippi!");
    x = x+1;
}

// Fizbuzz variation 
// Write a while loop that:

// Loop through the numbers 1 to 20
// If the number is divisible by 3, print "Julia"
// If the number is divisible by 5, print "James"
// If the number is divisible by 3 and 5, print "JuliaJames"
// If the number is not divisible by 3 or 5, print the number


var x = 1;

while (x<= 20) {
    if ( (x%5 ===0)  && (x%3 ===0) ){
        console.log("JuliaJames");
    } else if (x % 3 === 0){
        console.log("Julia");
    }
    else if (x % 5 ===0 ){
        console.log("James");
    }
    else {
        console.log(x);
    }
    x++; 
}


// Programming Quiz: 99 Bottles of Juice (4-2)
// * Use the following `while` loop to write out the song "99 bottles of juice".
// * Log the your lyrics to the console.
// *
// * Note
// *   - Each line of the lyrics needs to be logged to the same line.
// *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
// */


var num = 99;

while (num <= 99) {
    if (num === 1 ) {
        console.log(num+ " bottle of juice on the wall! " +num+ " bottle of juice! Take one down, pass it around... " +(num-1) + " bottles of juice on the wall!");
        break;
    }
    else if (num === 2 ){
    console.log(num+ " bottles of juice on the wall! " +num+ " bottles of juice! Take one down, pass it around... " +(num-1) + " bottle of juice on the wall!");
    }
    else if (num <= 99 && num >1){
    console.log(num+ " bottles of juice on the wall! " +num+ " bottles of juice! Take one down, pass it around... " +(num-1) + " bottles of juice on the wall!");
    }
    num --;
}

//exercise 4-3
// Write a while loop that counts down from 60 seconds and:

// If there's a task being completed, it prints out the task
// If there is no task being completed, it prints out the time as T-x seconds

// During the final minute, NASA has 6 tasks to complete:

// Orbiter transfers from ground to internal power (T-50 seconds)
// Ground launch sequencer is go for auto sequence start (T-31 seconds)
// Activate launch pad sound suppression system (T-16 seconds)
// Activate main engine hydrogen burnoff system (T-10 seconds)
// Main engine start (T-6 seconds)
// Solid rocket booster ignition and liftoff! (T-0 seconds)

var time = 60; 
while (time >= 0) {
    if (time === 0 ){
        console.log("Solid rocket booster ignition and liftoff!");
        break;
    }
     else if (time === 6) {
        console.log("Main engine start"); 
        time--;
    }
       else if (time === 10) {
        console.log("Activate main engine hydrogen burnoff system"); 
        time--;
    }
       else if (time === 16) {
        console.log("Activate launch pad sound suppression system"); 
        time--;
    }
 
    else if (time === 31) {
        console.log("Ground launch sequencer is go for auto sequence start"); 
        time--;
    }
    else if (time === 50) {
        console.log("Orbiter transfers from ground to internal power"); 
        time--;
    }
    else if ( time <= 60 && time >= 0) {
        console.log("T-"+time+" seconds");
        time --; 
    }
    else {
        console.log("T-"+time+" seconds");
    }
}

//Programming Quiz: Changing the Loop (4-4)
// rewrite the while loop as a for loop
var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}

for (var x = 9; x >= 1; x--) {
    console.log("hello " + x);
}


/*
 * Programming Quiz: Fix the Error 1 (4-5)
 */

// fix the for loop
for (var x = 5; x < 10; x++) {
    console.log(x);
}

// Programming Quiz: Fix the Error 2 (4-6)


// fix the for loop
for (var k = 0; k < 200; k++) {
   console.log(k);
}

// 4-7
//Write a for loop that prints out the factorial of the number 12
//Save your final answer in a variable called solution and print it to the console.


var solution = 12;
for (var i = 11; i > 0; i--){
solution *= i ; 
}
console.log(solution);

//Programming Quiz: Find my Seat (4-8)
for (var row = 0; row < 26; row++) {
    row;
    for (var seat = 0; seat<=99; seat++){
    console.log(row+"-"+seat);
  }
}
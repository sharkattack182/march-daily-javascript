
// CApitalize the names
// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.
// Difficulty: Medium
// Date: March 1 2021
// Solve Time: 4 minutes

// function capMe(arr) {
//     var newArr = []
//     arr.forEach(name => {
//         let capd = name[0].toUpperCase() + name.toLowerCase().substring(1);
//         newArr.push(capd);
//     });

//     console.log(newArr)
// }



// capMe(["mavis", "senaida", "letty"])
// capMe(["samuel", "MABELLE", "letitia", "meridith"])
// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"])



// Positive Count / Negative Sum
// Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.
// Difficulty: Medium
// Date: March 2 2021
// Solve Time: 6 minutes

// function countPosSumNeg(array) {
//     let returnArr = []
//     let positive = 0;
//     let sum = 0;
//     array.forEach(number => {
//         if(number > 0 ) {
//             positive ++
//         } else {
//             sum += number;
//         }
//     });

//     returnArr.push(positive, sum);
//     console.log(returnArr)
// }

// countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
// countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]);
// countPosSumNeg([91, -4, 80, -73, -28]);
// countPosSumNeg([]);




// Reverse the Number
// Create a function that takes an integer n and reverses it. If the number is negative, treat it like it's positive.
// Difficulty: Medium
// Date: March 3 2021
// Solve Time: 6 minutes

// function rev(num) {
//     if(num < 0) {
//         num = num * -1;
//     }
//     var numString = num.toString();
//     var arr = numString.split("");
//     var returnArr = []
//     for (let i = arr.length; i >= 0; i--) {
//         const number = arr[i];
//         returnArr.push(number)
//     }
//     console.log(returnArr.join(""))
// };


// rev(5121);
// rev(69);
// rev(-122157);



// Rock Paper Scissors
// Abigail and Benson are playing Rock, Paper, Scissors.

// Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.

// Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".

// R stands for Rock
// P stands for Paper
// S stands for Scissors
// Difficulty: Hard
// Date: March 4 2021
// Solve Time: 16 minutes

// function calculateScore(array) {
//     var abigail = 0;
//     var benson = 0;

//     function sortGame(arr) {
//         if(arr[0] === arr[1]) {
//             return "tie";
//         } else if(arr[0] === "R" && arr[1] === "S" ||
//         arr[0] === "P" && arr[1] === "R" ||
//         arr[0] === "S" && arr[1] === "P") {
//             abigail++;
//         } else {
//             benson++;
//         }
//     }

//     for (let i = 0; i < array.length; i++) {
//         const game = array[i];
//         sortGame(game)
//     }

//     if(abigail === benson) {
//         console.log("Tie")
//     } else if(abigail > benson) {
//         console.log("Abigail")
//     } else {
//         console.log("Benson")
//     }
// }

// calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]);

// // Benson wins the first game (Paper beats Rock).
// // Abigail wins the second game (Rock beats Scissors).
// // Abigail wins the third game (Scissors beats Paper). 
// // Abigail wins 2/3.

// calculateScore([["R", "R"], ["S", "S"]]);

// calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]);


// Safecracker
// Traditional safes use a three-wheel locking mechanism, with the safe combination entered using a dial on the door of the safe. The dial is marked with clockwise increments between 0 and 99. The three-number combination is entered by first dialling to the right (clockwise), then to the left (anti-clockwise), and then to the right (clockwise) again. Combination numbers are read from the top of the dial:
// Difficulty: Hard
// Date: March 5 2021
// Solve Time: 13 minutes


// function safecracker(start, movements) {
//     var count;
//     var returnArr = []
//     if(start === 0) {
//         count = 100;
//     } else {
//         count = start;
//     }
//     var num1 = count - movements[0];
//     count -= movements[0];
//     returnArr.push(num1);
//     var num2 = count + movements[1];
//     count += movements[1];
//     returnArr.push(num2);
//     var num3 = count -= movements[2];
//     returnArr.push(num3);

//     var newArr = returnArr.map(number => {
//         if(number > 100) {
//             return number - 100;
//         } else if (number < 0) {
//             return number + 100;
//         }else {
//             return number;
//         }
//     });

//     console.log(newArr)
// }

// safecracker(0, [3, 10, 5]);
// safecracker(96, [54, 48, 77]);
// safecracker(43, [51, 38, 46]);
// safecracker(4, [69, 88, 55]);



// Sum of Vowels
// Create a function that takes a string and returns the sum of vowels, where some vowels are considered numbers.
// Difficulty: Hard
// Date: March 6 2021
// Solve Time: 8 minutes

// function sumOfVowels(string) {
//     var score = 0;
//     string = string.toLowerCase();
//     var array = string.split("");
//     for (let i = 0; i < array.length; i++) {
//         const letter = array[i];
//         if(letter == "a") {
//             score += 4;
//         } else if(letter == "e") {
//             score += 3;
//         } else if(letter == "i") {
//             score += 1;
//         }
//     }
//     console.log(score)
// }

// sumOfVowels("Let\'s test this function.");

// sumOfVowels("Do I get the correct output?");

// sumOfVowels("I love edabit!");




// Oddly or Evenly Positioned
// Create a function that returns the characters from an array or string r on odd or even positions, depending on the specifier s. The specifier will be "odd" for items on odd positions (1, 3, 5, ...) and "even" for items on even positions (2, 4, 6, ...).
// Difficulty: Hard
// Date: March 7 2021
// Solve Time: 13 minutes

function charAtPos(input, specifier) {
    var returnString ="";
    var returnArr = [];
    if(typeof input === "string") {
        var spec = 0;
        var arr = input.split("");
        if(specifier == "even") {
            spec = 1;
        } else {
            spec = 0;
        }

        for (let i = spec; i < arr.length; i+=2) {
            const element = arr[i];
            returnString += element;
        }

        console.log(returnString)
    } else {
        var spec = 0;
        if(specifier == "even") {
            spec = 1;
        } else {
            spec = 0;
        }

        for (let i = spec; i < input.length; i+=2) {
            const element = input[i];
            returnArr.push(element);
        }
        console.log(returnArr)
    }
}

charAtPos([2, 4, 6, 8, 10], "even");
charAtPos("EDABIT", "odd");
charAtPos(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "odd");
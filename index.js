
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

function rev(num) {
    if(num < 0) {
        num = num * -1;
    }
    var numString = num.toString();
    var arr = numString.split("");
    var returnArr = []
    for (let i = arr.length; i >= 0; i--) {
        const number = arr[i];
        returnArr.push(number)
    }
    console.log(returnArr.join(""))
};


rev(5121);
rev(69);
rev(-122157);
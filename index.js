
// CApitalize the names
// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.
// Difficulty: Medium
// Date: March 1 2021
// Solve Time: 4 minutes

function capMe(arr) {
    var newArr = []
    arr.forEach(name => {
        let capd = name[0].toUpperCase() + name.toLowerCase().substring(1);
        newArr.push(capd);
    });

    console.log(newArr)
}



capMe(["mavis", "senaida", "letty"])
capMe(["samuel", "MABELLE", "letitia", "meridith"])
capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"])
function foo() {
    let rightUser = false;
    while (!rightUser) {
        let username = prompt("username: ");
        if (username && username.trim().length !== 0 && isNaN(Number(username))) {
            rightUser = true;
        }
        else {
            console.log("please enter a valid username.");
        }
    }

    let rightGrades = false;
    let gradesArr = [];
    while (!rightGrades) {
        let grades = prompt("grades separated by comma: ");
        if (!grades) {
            console.log("invalid, try again.");
            continue;
        }
        else {
            //split, trim, make sure length of each string's length is not 0
            gradesArr = grades.split(",").map(grade => grade.trim()).filter(grade => grade.length > 0);
            //ensure that each element is a number
            rightGrades = gradesArr.every(grade => !isNaN(Number(grade)));
            if (!rightGrades) {
                console.log("invalid, try again");
            }
        }
    }


    console.table(gradesArr);
    let numsArr = gradesArr.map(Number);
    let sum = 0;
    for (let i = 0; i < numsArr.length; i++) {
        sum += numsArr[i];
    }
    console.log("Average of grades: " + (sum / numsArr.length));
}
foo();

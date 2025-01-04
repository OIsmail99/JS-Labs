function foo() {
    let username = prompt("username: ");
    let grades = prompt("grades separated by comma: ");
    let gradesArr = grades.split(",");
    console.table(gradesArr);
    let numsArr = [];
    for (let i = 0; i < gradesArr.length; i++) {
        numsArr.push(Number(gradesArr[i]));
    }
    let sum = 0;
    for (let i = 0; i < numsArr.length; i++) {
        sum += numsArr[i];
    }
    console.log("Average of grades: " + (sum / numsArr.length));
}
foo();

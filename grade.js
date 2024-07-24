function getGrade() {
    let marks = prompt("Enter student marks (0-100):");
    marks = Number(marks);
    let grade;

    // Check if marks are valid
    if (marks < 0 || marks > 100) {
        alert("Please enter valid marks between 0 and 100.");
        return;
    }

    if (marks >= 80) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    console.log('Grade: ' + grade);
}
getGrade();
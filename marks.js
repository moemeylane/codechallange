function gradeStudent() {
    
    let marks = prompt("Enter student marks (between 0 and 100):");
    
    
    marks = Number(marks);
    
    
    if (isNaN(marks) || marks < 0 || marks > 100) {
        return "Invalid input. Please enter marks between 0 and 100 .";
    }
    
    
    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }
    
    
    return `Grade: ${grade}`;
}
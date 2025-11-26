let percentage = prompt("Enter Your HTML test Percenatge");
percentage = Number(percentage);

if (percentage > 100) {
    alert("Invalid");
} else if (percentage < 0) {
    alert("Invalid");
} else if (percentage >= 80) {
    alert("A+ Grade");
} else if (percentage >= 75) {
    alert("A Grade");
} else if (percentage >= 70) {
    alert("B Grade");
} else if (percentage >= 60) {
    alert("C Grade");
} else if (percentage >= 50) {
    alert("D Grade");
} else if (percentage >= 40) {
    alert("E Grade");
} else {
    alert("Fail");
}

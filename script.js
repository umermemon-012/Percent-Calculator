let percentage = prompt("Please enter your percentage:");

if (percentage === "" || percentage < 0 || percentage > 100 || percentage !== String(Number(percentage))) {
  alert("Invalid input! Please enter a valid percentage between 0 and 100.");
} else {
  percentage = Number(percentage);
  if (percentage >= 90) {
    alert("Your grade is: A+");
  } else if (percentage >= 80) {
    alert("Your grade is: A");
  } else if (percentage >= 70) {
    alert("Your grade is: B+");
  } else if (percentage >= 60) {
    alert("Your grade is: B");
  } else if (percentage >= 50) {
    alert("Your grade is: C+");
  } else if (percentage >= 40) {
    alert("Your grade is: C") 
  } else {
    alert("Your grade is: Fail");
  }
}

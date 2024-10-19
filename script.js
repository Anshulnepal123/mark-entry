let grade = (subject) => {
    if (subject >= 90) {
      return ('A+')
    } else if (subject >= 80) {
      return ('A')
    } else if (subject >= 70) {
      return ('B+')
    } else if (subject >= 60) {
      return ('b')
    }
  }
  
  class MyClass {
    constructor(mathsOral, maths, englishOral, english, nepaliOral, nepali,total,individualTotal) {
      this.mathsOralValue = mathsOral;
      this.mathsScoreValue = maths;
      this.englishOralValue = englishOral;
      this.englishScoreValue = english;
      this.nepaliOralValue = nepaliOral;
      this.nepaliScoreValue = nepali;
      this.totalMarks = total;
      this.individualTotal = individualTotal;
    }
  
    mathsOral() {
      let percentage = (this.mathsOralValue / this.individualTotal) * 100;
      return `${percentage.toFixed(2)}% ${grade(percentage)}`;
    }
  
    mathsScore() {
      let percentage = (this.mathsScoreValue /this.individualTotal) * 100;
      return `${percentage.toFixed(2)}% ${grade(percentage)}`;
    }
  
    englishOral() {
      let percentage = (this.englishOralValue /this.individualTotal) * 100;
      return `${percentage.toFixed(2)}% ${grade(percentage)}`;
    }
  
    englishScore() {
      let percentage = (this.englishScoreValue / this.individualTotal) * 100;
      return `${percentage.toFixed(2)}% ${grade(percentage)}`;
    }
  
    nepaliOral() {
      let percentage = (this.nepaliOralValue / this.individualTotal) * 100;
      return `${percentage.toFixed(2)}% ${grade(percentage)}`;
    }
  
    nepaliScore() {
      let percentage = (this.nepaliScoreValue /this.individualTotal) * 100;
      return `${percentage.toFixed(2)}% ${grade(percentage)}`;
    }
  
    percentage() {
      let total = this.mathsOralValue + this.mathsScoreValue + this.englishOralValue + this.englishScoreValue + this.nepaliOralValue + this.nepaliScoreValue;
      let percentageTotal = (total / this.totalMarks) * 100;
      return `${percentageTotal.toFixed(2)}% ${grade(percentageTotal)} Total Marks: ${total.toFixed(2)}`;
    }
  }
  
  document.getElementById('marksForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Retrieve values from the input fields
    let maths_oral = Number.parseFloat(document.querySelector('input[name="maths_oral"]').value);
    let maths_score = Number.parseFloat(document.querySelector('input[name="maths"]').value);
    let english_oral = Number.parseFloat(document.querySelector('input[name="english_oral"]').value);
    let english_score = Number.parseFloat(document.querySelector('input[name="english"]').value);
    let nepali_oral = Number.parseFloat(document.querySelector('input[name="nepali_oral"]').value);
    let nepali_score = Number.parseFloat(document.querySelector('input[name="nepali"]').value);
    let totalMarks   = Number.parseFloat(document.querySelector('input[name="totalMarks"]').value);
    let individualTotal   = Number.parseFloat(document.querySelector('input[name="individualTotal"]').value);


  
    // Check if parsed values are NaN, if so, assign default value of 0
    maths_oral = isNaN(maths_oral) ? 0 : maths_oral;
    maths_score = isNaN(maths_score) ? 0 : maths_score;
    english_oral = isNaN(english_oral) ? 0 : english_oral;
    english_score = isNaN(english_score) ? 0 : english_score;
    nepali_oral = isNaN(nepali_oral) ? 0 : nepali_oral;
    nepali_score = isNaN(nepali_score) ? 0 : nepali_score;
  
    // Create an instance of MyClass
    let studentMarks = new MyClass(maths_oral, maths_score, english_oral, english_score, nepali_oral, nepali_score,totalMarks,individualTotal);
  
    // Get the element to display the result
    let answerElement = document.querySelector('.answers .text');
    answerElement.innerHTML = `
    <strong>Subject Marks & grade:</strong><br>
    English Written: ${studentMarks.englishScore()}<br>
    English Oral Marks: ${studentMarks.englishOral()}<br>
    Nepali Written: ${studentMarks.nepaliScore()}<br>
    Nepali Oral Marks: ${studentMarks.nepaliOral()}<br>
    Maths Written: ${studentMarks.mathsScore()}<br>
    Maths Oral Marks: ${studentMarks.mathsOral()}<br>
    <br>
    <strong>Total Percentage:</strong><br>
    ${studentMarks.percentage()}<br>
    `;
  });
  
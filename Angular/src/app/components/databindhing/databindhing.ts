import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databindhing',
  imports: [FormsModule, CommonModule],
  templateUrl: './databindhing.html',
  styleUrl: './databindhing.css',
  //styles: ['h3 {color: red;}']
  encapsulation: ViewEncapsulation.Emulated
})
export class Databindhing {

  userName: string = 'Vishnu Teja';
  img_url: string = 'https://lh3.googleusercontent.com/a/ACg8ocLSQUjiJ9zvy2eL26s0DbpdXYNaIXMJmeM6QufryWHm8DVNtdmZ=s576-c-no';
  flag: boolean = true;
  max_length: number = 50;

  toggleFlag() {
    this.flag = !this.flag;
  }

//   1.⁠ ⁠Have a paragraph and a toggle button; on clicking the button, control the visibility (Show / Hide) of the paragraph.
// 2.⁠ ⁠Create a textarea with maxLength = 100; as the user keeps typing, display the updated remaining characters.
// 3.⁠ ⁠Create a textarea; as the user keeps typing, count and display how many words and how many characters are typed.
// 4.⁠ ⁠Create a dropdown with state names; when the user changes the dropdown value, print the selected value in a div.
// 5.⁠ ⁠create a input box, toggle the type of that input box to (text/password)

  viewPara: boolean = true;

  togglePara() {
    this.viewPara = !this.viewPara;
  }

    // ---------------- TASK 2 ----------------
  // maxlength = 100 + remaining characters
  textValue1: string = '';
  maxLimit1: number = 100;
  remaining1: number = 100;

  updateTask2() {
    this.remaining1 = this.maxLimit1 - this.textValue1.length;
  }


  // ---------------- TASK 3 ----------------
  // NO maxlength + show word count + char count
  textValue2: string = '';
  charCount1: number = 0;
  wordCount1: number = 0;

  updateTask3() {

    // character count
    this.charCount1 = this.textValue2.length;

    // word count
    let trimmed = this.textValue2.trim();

    if (trimmed === '') {
      this.wordCount1 = 0;
    } else {
      let words = trimmed.split(/\s+/);
      this.wordCount1 = words.length;
    }
  }

  selectedState: string = '';

  inputType: string = 'password';

  toggleInputType() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
  //6. Create a counter example with three controls: Increment, Decrement, and Reset.

  counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }
// 7. Create a temperature converter to convert Celsius to Fahrenheit.
// 8. Create two input boxes and a dropdown (+ , - , * , /) and perform arithmetic operations based on the selected operator.
// 9. Create a button that increases font size and another button that decreases font size for a paragraph.
// 10. Create a dropdown with colors and change the background color of a div based on selection.

  celsius: number = 0;
  fahrenheit: number = 32;
  
  convertToFahrenheit() {
    this.fahrenheit = (this.celsius * 9/5) + 32;
  }
  convertToCelsius() {
    this.celsius = (this.fahrenheit - 32) * 5/9;
  }

  num1: number = 0;
  num2: number = 0
  operator: string = '+';
  result: number = 0;
  
  calculate() {
    switch(this.operator) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        if (this.num2 !== 0) {
          this.result = this.num1 / this.num2;
        } else {
          this.result = NaN; // Handle division by zero
        }
        break;
    }
  }

  fontSize: number = 16;

  increaseFontSize() {
    this.fontSize += 2;
  }

  decreaseFontSize() {
    this.fontSize -= 2;
  }

  bgColor: string = '';
  selectedColor: string = 'white';  

}





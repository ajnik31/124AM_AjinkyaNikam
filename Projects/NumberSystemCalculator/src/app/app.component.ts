import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NumberSystemCalculator';
  result = "";
  fromOption: string = "";
  toOption: string = "";
  inputNumber: string = "";

  convertValues() {
    var selectedFromOption = this.fromOption.substring(4, this.fromOption.length);
    var selectedToOption = this.toOption.substring(2, this.toOption.length);
    console.log(this.fromOption);
    console.log(this.toOption);

    var temp: number = 0;
    if (selectedFromOption == "Binary") {
      temp = this.binaryToDecimal(this.inputNumber);
    } else if (selectedFromOption == "Octal") {
      temp = this.octalToDecimal(this.inputNumber);
    } else if (selectedFromOption == "Hexadecimal") {
      temp = this.hexToDecimal(this.inputNumber);
    } else if (selectedFromOption == "Decimal") {
      temp = parseInt(this.inputNumber);
    } else {
      this.result = "Please select valid options";
      return;
    }

    if (selectedToOption == "Binary") {
      this.result = this.decimalToBinary(temp);
    } else if (selectedToOption == "Octal") {
      this.result = this.decimalToOctal(temp);
    } else if (selectedToOption == "Hexadecimal") {
      this.result = this.decimalToHex(temp).toUpperCase();
    } else if (selectedToOption == "Decimal") {
      this.result = temp.toString();
    } else {
      this.result = "Please select valid options";
      return;
    }

  }

  binaryToDecimal(binary: string): number {
    return parseInt(binary, 2);
  }

  octalToDecimal(octal: string): number {
    return parseInt(octal, 8);
  }

  hexToDecimal(hex: string): number {
    return parseInt(hex, 16);
  }

  decimalToBinary(decimal: number): string {
    return decimal.toString(2);
  }

  decimalToOctal(decimal: number): string {
    return decimal.toString(8);
  }

  decimalToHex(decimal: number): string {
    return decimal.toString(16);
  }
}

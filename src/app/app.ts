import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  num1: number = 0;
  num2: number = 0;
  operador: string = '+';
  resultado: number | null = null;
  historial: string[] = [];

  calcular(): void {
    const a = Number(this.num1);
    const b = Number(this.num2);

    switch (this.operador) {
      case '+':
        this.resultado = a + b;
        break;
      case '-':
        this.resultado = a - b;
        break;
      case '*':
        this.resultado = a * b;
        break;
      case '/':
        this.resultado = a / b;
        break;
      default:
        this.resultado = null;
    }

    if (this.resultado !== null) {
      this.historial.push(`${a} ${this.operador} ${b} = ${this.resultado}`);
    }
  }
}
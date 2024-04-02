import { CommonModule, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe} from '@angular/common';
import { Component } from '@angular/core';


import { RouterOutlet } from '@angular/router';
import { TitlePrefixPipe } from './Pipes/title-prefix.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,
    DecimalPipe,
    
    
    UpperCasePipe,LowerCasePipe,DatePipe,PercentPipe,TitlePrefixPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularPipes';
  // birthday = new Date();
  students = [
    { name: 'John', gender: 'male', age: 20, birthDate: new Date(2002, 0, 15), fees: 18000, score: 85.45 },
    { name: 'Emily', gender: 'female', age: 22, birthDate: new Date(2000, 4, 10),fees: 56000, score: 78.923 },
    { name: 'Alex', gender: 'male', age: 21, birthDate: new Date(2001, 8, 20), fees: 14000, score: 67.321 },
    { name: 'Michael', gender: 'male', age: 19, birthDate: new Date(2003, 2, 5),fees: 34500, score: 91.75 },
    { name: 'Sophia', gender: 'female', age: 20, birthDate: new Date(2002, 6, 18), fees: 13000, score: 82.632 },
    { name: 'Ethan', gender: 'male', age: 23, birthDate: new Date(1999, 11, 30), fees: 18000, score: 65.428 },
    { name: 'Olivia', gender: 'female', age: 21, birthDate: new Date(2001, 3, 25), fees: 16060, score: 88.976 },
    { name: 'Noah', gender: 'male', age: 22, birthDate: new Date(2000, 9, 12), fees: 18600, score: 79.813 },
    { name: 'Ava', gender: 'female', age: 20, birthDate: new Date(2002, 7, 8), fees: 12000, score: 70.215 },
    { name: 'Liam', gender: 'male', age: 21, birthDate: new Date(2001, 5, 14), fees: 48000, score: 87.394 }
  ];
  
}

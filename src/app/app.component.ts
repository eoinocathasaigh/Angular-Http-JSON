import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './Services/student.service'; //Need to import our service to get the data it retrieves
import { CommonModule } from '@angular/common';
import { WeatherService } from './Services/weather.service'; //Need to import our weather service before we can use it

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  students:any = [];
  weatherInfo:any = [];
  weatherDetails:any = ""; //Other two are arrays of details so they can be stored in arrays, since this isnt an array and is an object
  //we need to store it in an empty string
  constructor(private studentService:StudentService, private weatherService:WeatherService){} // <-- Exam Question

  //Safer place to put our logic than in a constructor - must first include the OnInit in the Component Import and implement it in this clas
  ngOnInit(): void {
    this.studentService.GetStudentData().subscribe(
      (data)=>{
        //Retrieves each of the students objects and stores them in our any array
        this.students = data.students;
      }
    );

    //Now we get the info and store it in an array for the proper usage
    this.weatherService.GetWeather().subscribe(
      (data)=>{
        this.weatherInfo = data.weather;
        this.weatherDetails = data.main;
      }
    );
  }
  //Subscribe will allow us to run and get data asynchronously 
}

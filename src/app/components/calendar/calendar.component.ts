import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  tasks: any[] = [
    {
      uuid: "dgewt5435e",
      name: "validate the listener spring with websockets",
      hour: "1:30 PM",
      day: "TUESDAY",
      day_number: 9,
      month: "APRIL",
      color: "#dedea4"
    }
  ];

  days_number: any[] = [];

  ngOnInit(): void {
    for (let i = 1; i <= 31; i++) {
      const objectDay = {
        day_number: i,
        task: {
          uuid: "",
          name: "",
          hour: "",
          day: "",
          day_number: 0,
          month: "",
          color: ""
        }
      }
      this.days_number.push(objectDay);
    }
    this.mergeDayNumberToTasks();
    console.log(this.days_number);
  }

  mergeDayNumberToTasks(){
    this.days_number.map(day => {
      this.tasks.map(task => {
        if (day.day_number === task.day_number) {
          day.task = task;
        }
      });
    });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  date: string = '';

  ngOnInit(): void {
    this.getDateOfCurrentDay();
  }

  getDateOfCurrentDay(): void {
    const date = new Date();
    const day = date.getDate();
    // get month start from 0
    // get name of month
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    this.date = `${day} of ${month} ${year}`;
  }

  changeDarkMode(): void {
    const body = document.body;
    body.classList.toggle('dark');
  }

}

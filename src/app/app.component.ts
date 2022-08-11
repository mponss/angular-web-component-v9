import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-web-component-v9';
  counter = 0;
  text = '';

  ngOnInit(): void {
      setInterval(() => {
        this.counter++;
      }, 1000);
  }
}

import { Component, OnInit } from '@angular/core';
import Typed  from 'typed.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['a Full Stack Developer.', 'a Tech Enthusiast.', 'a Music Lover!'],
     typeSpeed: 80,
     backSpeed: 80,
     loop: true
    }
    const typed = new Typed('.type', options);
  }

 

}

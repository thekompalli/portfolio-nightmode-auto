import { Component, OnInit } from '@angular/core';
import Typed  from 'typed.js';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options1 = {
      strings: ['MongoDB, Express.js, Angular, Node.js'],
     typeSpeed: 80,
     backSpeed: 80,
     loop: true
    }
    const options2 = {
      strings: ['Angular, Chart.js'],
     typeSpeed: 80,
     backSpeed: 80,
     loop: true
    }
    const options3 = {
      strings: ['Python Flask, Angular'],
     typeSpeed: 80,
     backSpeed: 80,
     loop: true
    }
    const options4 = {
      strings: ['HTML, CSS, Vanilla JavaScript'],
     typeSpeed: 80,
     backSpeed: 80,
     loop: true
    }
    
    const typed = new Typed('.type1', options1);
    const typed2 = new Typed('.type2', options2);
    const typed3 = new Typed('.type3', options1);
    const typed4 = new Typed('.type4', options1);
    const typed5 = new Typed('.type5', options3);
    const typed6 = new Typed('.type6', options4);
    const typed7 = new Typed('.type7', options4);
    const typed8 = new Typed('.type8', options4);
  }
  img1 = "assets/images/chat.png"
  img2 = "assets/images/covid.jpg"
  img3 = "assets/images/work-3.jpg"
  img4 = "assets/images/work-6.jpg"
  img5 = "assets/images/rzp.png"
  img6 = "assets/images/image.jpg"
  img7 = "assets/images/game.jpg"
  img8 = "assets/images/new.jpg"

}

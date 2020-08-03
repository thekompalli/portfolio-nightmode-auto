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
    
    const typed = new Typed('.type1', options1);
 
  }
  img1 = "assets/images/chat.png"
  img2 = "assets/images/covid.jpg"
  img3 = "assets/images/work-3.jpg"
  img4 = "assets/images/work-6.jpg"
  img5 = "assets/images/rzp.png"
  img6 = "assets/images/image.jpg"
  img7 = "assets/images/game.jpg"
  img8 = "assets/images/new.jpg"
  img9 = "assets/images/npm.png"
  img10 = "assets/images/crm.jpg"

}

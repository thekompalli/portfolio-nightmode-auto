import { Component, OnInit, DoCheck } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'pfNew';
  toggle:boolean;
  time;

  ngDoCheck(){
    this.time = moment().format('LTS')
  }
  ngOnInit () {
    
    if(this.getTime() > 19 || this.getTime() < 5){
      document.getElementById('switch').setAttribute("checked", "true")
      this.toggle = false
    } else{
      document.getElementById('switch').setAttribute("checked", "false")
      this.toggle = true
    }
    this.getVal()
  }
  getVal() {
    this.toggle = !this.toggle
    if(!this.toggle) {
      document.querySelector('.wrapper').setAttribute('data-theme', 'light')
    } else {
      document.querySelector('.wrapper').setAttribute('data-theme', 'dark')
    }

    document.querySelector('.wrapper').classList.add('transition');

    window.setTimeout(() => {
      document.querySelector('.wrapper').classList.remove('transition')
    }, 1000)
    
  }

  getTime(){
    let hr = (new Date()).getHours()
    return hr
  }
}

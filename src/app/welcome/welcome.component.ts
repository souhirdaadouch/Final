import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  counter = 5;

  constructor(private router: Router) {
    setTimeout(() => {
      router.navigate(['/home']);
    }, 5000);
    setInterval(() => {
      if (this.counter > 0) {
        this.counter--;
      }
    },1000);
  }

  ngOnInit() {
  }

}

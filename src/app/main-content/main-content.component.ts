import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../animations/fade-in.animation';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  animations: [fadeAnimation]

})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}

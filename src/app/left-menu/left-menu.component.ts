import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  @Output("close") navClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }



  onClickNavClose() {
    this.navClose.emit();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  // Check coi đã ấn nút hay chưa
  public press = false;

  constructor() { }

  ngOnInit(): void {
  }
  changePress(): void {
    //show box msg
    this.press = !this.press;
    //wait 3 Seconds and hide
    
  }

}

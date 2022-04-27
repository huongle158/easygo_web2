import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',  '../../../../assets/css/base.css', '../../../../assets/css/responsive.css', '../../../../assets/css/style.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('tab1') tab1: any;

  constructor() { 
    // let tab1 = this.tab1.nativeElement;
    // console.log(tab1)
  }

  ngOnInit(): void {
  }

}

// const tab1 = document.getElementById('tab1');
// const tab2 = document.getElementById('tab2');
// const takeRoom = document.querySelector('.header__search-take-room');
// const checkOut = document.querySelector('.header__search-check-out');
// const customer = document.querySelector('.header__search-customer');
// const day = document.querySelector('.header__search-day');
// const placeSub = document.querySelector('.header__search-place-sub');
// const takeRoomSub = document.querySelector('.header__search-take-room-sub');
// const header__search = document.querySelector('.header__search');
// const headerSearchItems = document.querySelectorAll('.header__search-item');
// const headerSearchCustomer = document.querySelector('.header__search-customer');
// const headerSearchCustomerSub = document.querySelector('.header__search-customer-sub');
// const headerSearchBtn = document.querySelector('.header__search-btn');
// const headerMobile = document.querySelector('.header-mobile');
// const headerRightBtn = document.querySelector('.header__right-button');
// let modal = document.querySelector('.language-currency-modal');
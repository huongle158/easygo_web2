import { Component, OnInit } from '@angular/core';

interface Customer {
  guest: string;
  roomId: string;
  date: string;
  payment: string;
  contactMail: string;
  contactPhone: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listOfCustomer: Customer[] = [
    {
      guest: 'Tony Soop',
      roomId: 'JNO1',
      date: 'March 28,2021',
      payment: 'Unpaid',
      contactMail: '',
      contactPhone: '',
   },
    {
      guest: 'Karan Adka',
      roomId: 'JNO2',
      date: 'March 28,2021',
      payment: 'Paid',
      contactMail: '',
      contactPhone: '',
   },
    {
      guest: 'Karan Adka',
      roomId: 'JNO2',
      date: 'March 28,2021',
      payment: 'Paid',
      contactMail: '',
      contactPhone: '',
   },
    {
      guest: 'Karan Adka',
      roomId: 'JNO2',
      date: 'March 28,2021',
      payment: 'Paid',
      contactMail: '',
      contactPhone: '',
   },
    {
      guest: 'Karan Adka',
      roomId: 'JNO2',
      date: 'March 28,2021',
      payment: 'Paid',
      contactMail: '',
      contactPhone: '',
   },
    {
      guest: 'Karan Adka',
      roomId: 'JNO2',
      date: 'March 28,2021',
      payment: 'Paid',
      contactMail: '',
      contactPhone: '',
   },
    {
      guest: 'Karan Adka',
      roomId: 'JNO2',
      date: 'March 28,2021',
      payment: 'Paid',
      contactMail: '',
      contactPhone: '',
   },
    {
      guest: 'Karan Adka',
      roomId: 'JNO2',
      date: 'March 28,2021',
      payment: 'Paid',
      contactMail: '',
      contactPhone: '',
   },
    {
      guest: 'Karan Adka',
      roomId: 'JNO2',
      date: 'March 28,2021',
      payment: 'Paid',
      contactMail: '',
      contactPhone: '',
   },
  ]

}

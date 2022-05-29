import { Component, OnInit } from '@angular/core';

interface Room {
  room: string;
  id: string;
  address: string;
  type: string;
  price: number;
  contactMail: string;
  contactPhone: string;
}


@Component({
  selector: 'app-allroom',
  templateUrl: './allroom.component.html',
  styleUrls: ['./allroom.component.css']
})
export class AllroomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  listOfRoom: Room[] = [
    {
      room: '../../../../../assets/img/bia.jpg',
      id: '#JNO1',
      address: 'TP.HCM',
      type: 'Standard',
      price: 300,
      contactMail: '',
      contactPhone: ''
    },
    {
      room: '../../../../../assets/img/bia.jpg',
      id: '#JNO1',
      address: 'TP.HCM',
      type: 'Standard',
      price: 300,
      contactMail: '',
      contactPhone: ''
    },
    {
      room: '../../../../../assets/img/bia.jpg',
      id: '#JNO1',
      address: 'TP.HCM',
      type: 'Standard',
      price: 300,
      contactMail: '',
      contactPhone: ''
    },
    {
      room: '../../../../../assets/img/bia.jpg',
      id: '#JNO1',
      address: 'TP.HCM',
      type: 'Standard',
      price: 300,
      contactMail: '',
      contactPhone: ''
    },
    {
      room: '../../../../../assets/img/bia.jpg',
      id: '#JNO1',
      address: 'TP.HCM',
      type: 'Standard',
      price: 300,
      contactMail: '',
      contactPhone: ''
    },
    {
      room: '../../../../../assets/img/bia.jpg',
      id: '#JNO1',
      address: 'TP.HCM',
      type: 'Standard',
      price: 300,
      contactMail: '',
      contactPhone: ''
    },
    {
      room: '../../../../../assets/img/bia.jpg',
      id: '#JNO1',
      address: 'TP.HCM',
      type: 'Standard',
      price: 300,
      contactMail: '',
      contactPhone: ''
    },
    {
      room: '../../../../../assets/img/bia.jpg',
      id: '#JNO1',
      address: 'TP.HCM',
      type: 'Standard',
      price: 300,
      contactMail: '',
      contactPhone: ''
    },
    {
      room: '../../../../../assets/img/bia.jpg',
      id: '#JNO1',
      address: 'TP.HCM',
      type: 'Standard',
      price: 300,
      contactMail: '',
      contactPhone: ''
    },
    {
      room: '../../../../../assets/img/bia.jpg',
      id: '#JNO1',
      address: 'TP.HCM',
      type: 'Standard',
      price: 300,
      contactMail: '',
      contactPhone: ''
    },
    {
      room: '../../../../../assets/img/bia.jpg',
      id: '#JNO1',
      address: 'TP.HCM',
      type: 'Standard',
      price: 300,
      contactMail: '',
      contactPhone: ''
    },
    {
      room: '../../../../../assets/img/bia.jpg',
      id: '#JNO1',
      address: 'TP.HCM',
      type: 'Standard',
      price: 300,
      contactMail: '',
      contactPhone: ''
    },
  ]
}

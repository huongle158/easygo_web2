export class Booking{
    "bookingid": string;
    "date": string;
    "status": string;
    "payment": string;
    "price": number;
    "guest_name": string;
    "numberofpeople": number;
    "roomid": string;
    "roomname": string;
    "roomtype": string;
    "address": string;
    "checkin": string;
    "requires": string;
    "phone": number;
    "email": string;
    constructor(){
        this.bookingid = '',
        this.date = '',
        this.status = '',
        this.price = 0,
        this.payment = '',
        this.guest_name = '',
        this.numberofpeople = 0,
        this.roomid = '',
        this.roomname = '',
        this.roomtype = '',
        this.address = '',
        this.checkin = '',
        this.requires = '',
        this.phone = 0,
        this.email = ''


    }
}
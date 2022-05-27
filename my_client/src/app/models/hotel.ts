export class Hotel {
    "_id": string;
    "name": string;
    "image": any;
    "rating": any;
    "price": number;
    "place": any;
    "type": string;
    "numberofpeople": number;
    "bed": number;
    "bathroom": number;
    "characteristic": any;
    "description": string;
    "safety": string;
    "convenient": string;
    "rule": string;
    constructor() {
        this._id = "",
        this.name = "",
        this.image = [],
        this.rating = [],
        this.price = 0,
        this.place = [],
        this.type = "",
        this.numberofpeople = 0,
        this.bed = 0,
        this.bathroom = 0,
        this.characteristic = [],
        this.description = "",
        this.safety = "",
        this.convenient = "",
        this.rule = ""
        
    }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  getFilterList() {
    return [
      { "id": 1, "inputID": "all", "name": "Tất cả", "inputValue": "" },
      { "id": 2, "inputID": "wifi", "name": "Wi-fi", "inputValue": "Wi-fi" },
      { "id": 3, "inputID": "bep", "name": "Bếp", "inputValue": "Bếp" },
      { "id": 4, "inputID": "thangmay", "name": "Thang máy", "inputValue": "Thang máy" },
      { "id": 5, "inputID": "pet", "name": "Cho phép thú cưng", "inputValue": "Cho phép thú cưng" },
      { "id": 6, "inputID": "hotwater", "name": "Nước nóng", "inputValue": "Nước nóng" },
      { "id": 7, "inputID": "pool", "name": "Bể bơi", "inputValue": "Bể bơi" },
      { "id": 8, "inputID": "tv", "name": "TV", "inputValue": "TV" },
      { "id": 9, "inputID": "san", "name": "Sân hoặc ban công", "inputValue": "Sân hoặc ban công" },
      { "id": 10, "inputID": "losuoi", "name": "Lò sưởi trong nhà", "inputValue": "Lò sưởi trong nhà" }
    ]

  }
}

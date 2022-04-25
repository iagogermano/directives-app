import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    "Iago",
    "Jeferson",
    "Nilmar",
    "Junior"
  ];

  cities = [
    { name: "Sao Paulo", state: "SP"},
    { name: "Parana", state: "PR"},
    { name: "Espirito Santo", state: "ES"},
    { name: "Bahia", state: "BA"},
  ];

  constructor() { }

  ngOnInit() {
  }

}

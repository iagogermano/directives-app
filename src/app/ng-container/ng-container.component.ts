import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: "jeferson", role: "admin", lastlogin: new Date('1/1/2028') },
    { login: "iago", role: "user", lastlogin: new Date('3/20/2022') },
    { login: "nilmar", role: "admin", lastlogin: new Date('7/15/2040') },
    { login: "junior", role: "user", lastlogin: new Date('12/10/2019') },
  ];

  constructor() { }

  ngOnInit() {
  }

}

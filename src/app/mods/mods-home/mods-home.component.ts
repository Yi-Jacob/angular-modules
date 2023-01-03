import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {title: 'Manju', content: 'Rising Star'},
    {title: 'Daddy', content: 'Icon'},
     {title: 'r', content: 'r'}
  ]

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}

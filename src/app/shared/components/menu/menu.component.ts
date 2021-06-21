import { Component, Input, OnInit } from '@angular/core';

export interface MenuItem {
  text: string;
  link: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() public items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {}
}

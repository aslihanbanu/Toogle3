import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidenav',
  templateUrl: './slidenav.component.html',
  styleUrls: ['./slidenav.component.css']
})
export class SlidenavComponent implements OnInit {
  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }
  
  closeNav() {
    document.getElementById('mySidenav').style.width = '0';}
  constructor() { }

  ngOnInit(): void {
  }

  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  mostrar: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  show() {
    this.mostrar = !this.mostrar;
    console.log(this.mostrar);
  }
}

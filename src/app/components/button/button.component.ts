import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  clicked = true
  constructor() { }

  ngOnInit(): void {
  }
changeColor() {
this.clicked = !this.clicked
}
@Input('btn_txt') btn_txtName = ''
}

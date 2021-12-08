import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  btnTxt = 'Sidebar'
  constructor() { }

  ngOnInit(): void {
  }
  @Input('toggleSidebar') toggleSidebar = false
  @Output() onToggleSidebar = new EventEmitter<boolean>()
  onToggle(){
    this.toggleSidebar = !this.toggleSidebar
    this.onToggleSidebar.emit(this.toggleSidebar)
  }
}

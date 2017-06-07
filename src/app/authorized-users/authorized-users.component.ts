import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorized-users',
  templateUrl: './authorized-users.component.html',
  styleUrls: ['./authorized-users.component.css']
})
export class AuthorizedUsersComponent implements OnInit {
  isEditView: Boolean = false;


  constructor() { }

  ngOnInit() {
  }
  toogleEditView() {
    this.isEditView = !this.isEditView;

  }

}

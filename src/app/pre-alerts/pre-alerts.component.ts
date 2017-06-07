import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-alerts',
  templateUrl: './pre-alerts.component.html',
  styleUrls: ['./pre-alerts.component.css']
})
export class PreAlertsComponent implements OnInit {
  isEditView: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toogleEditView() {
    this.isEditView = !this.isEditView;

  }



}

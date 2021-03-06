import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  isEditView: Boolean = false;
  packages: any =
  [
    { "PAQUETE": 28677, "TRACKING": "4.20331E+29", "DESCRIPCION": "KITCHAN ACC", "REMITENTE": "AMAZON", "PESO": 24.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 23747, "TRACKING": "1ZW709680318017019", "DESCRIPCION": "BEAUTY ACC", "REMITENTE": "AMAZON", "PESO": 13.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 26044, "TRACKING": "4.20331E+29", "DESCRIPCION": "SCALE", "REMITENTE": "AMAZON", "PESO": 8.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 29897, "TRACKING": "1Z30Y8240243955043", "DESCRIPCION": "APPAREL", "REMITENTE": "AMAZON", "PESO": 7.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 30225, "TRACKING": "TBA276556408000", "DESCRIPCION": "KITCHEN ACC", "REMITENTE": "AMAZON", "PESO": 7.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 24697, "TRACKING": "4.20331E+29", "DESCRIPCION": "HEADPHONE", "REMITENTE": "AMAZON", "PESO": 5.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 28509, "TRACKING": "4.20331E+29", "DESCRIPCION": "CLOTHES", "REMITENTE": "FOREVER 21", "PESO": 5.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 30220, "TRACKING": "TBA276224966000", "DESCRIPCION": "KITCHEN ACC", "REMITENTE": "AMAZON", "PESO": 5.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 29688, "TRACKING": "4.20331E+29", "DESCRIPCION": "BABY P", "REMITENTE": "AMAZON", "PESO": 4.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 30901, "TRACKING": "TBA288998991000", "DESCRIPCION": "TOY", "REMITENTE": "AMAZON", "PESO": 4.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 25565, "TRACKING": "4.20331E+29", "DESCRIPCION": "PC ACC", "REMITENTE": "AMAZON", "PESO": 4.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 28780, "TRACKING": "4.20331E+33", "DESCRIPCION": "APPAREL", "REMITENTE": "CARTER", "PESO": 4.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 30820, "TRACKING": "4.20331E+29", "DESCRIPCION": "APPAREL", "REMITENTE": "RL MEDIA", "PESO": 4.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 28210, "TRACKING": "1Z306AY10216249245", "DESCRIPCION": "APPAREL", "REMITENTE": "AMAZON", "PESO": 3.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 30973, "TRACKING": "4.20331E+33", "DESCRIPCION": "APPAREL", "REMITENTE": "CARTER", "PESO": 3.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 29183, "TRACKING": "TBA260384257000", "DESCRIPCION": "BABY PRODUCT", "REMITENTE": "AMAZON", "PESO": 3.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 30060, "TRACKING": "LX09372788", "DESCRIPCION": "CAR ACC", "REMITENTE": "AMAZON", "PESO": 3.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 30740, "TRACKING": "4.20331E+29", "DESCRIPCION": "ELECTRONIC ACC", "REMITENTE": "SHIPPING DPTO", "PESO": 3.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 31218, "TRACKING": "4.20331E+29", "DESCRIPCION": "BABY P", "REMITENTE": "AMAZON", "PESO": 2.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 28601, "TRACKING": "4.20331E+29", "DESCRIPCION": "LAMP", "REMITENTE": "AMAZON", "PESO": 2.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 23743, "TRACKING": "1Z306A450232822991", "DESCRIPCION": "CLOTHES", "REMITENTE": "AMAZON", "PESO": 2.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 27478, "TRACKING": "LX07218502", "DESCRIPCION": "SHOES", "REMITENTE": "AMAZON", "PESO": 2.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 28416, "TRACKING": "1ZWX93600326630647", "DESCRIPCION": "BABY P", "REMITENTE": "AMAZON", "PESO": 2.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 27062, "TRACKING": "1ZWX93600325154888", "DESCRIPCION": "BABY P", "REMITENTE": "AMAZON", "PESO": 2.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 28616, "TRACKING": "1ZWX93600326828943", "DESCRIPCION": "CELL ACC", "REMITENTE": "AMAZON", "PESO": 2.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 31481, "TRACKING": "TBA299462036000", "DESCRIPCION": "APPAREL", "REMITENTE": "AMAZON", "PESO": 2.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 27032, "TRACKING": "1ZWX93600324945301", "DESCRIPCION": "BEAUTY PRODUCTS", "REMITENTE": "AMAZON", "PESO": 2.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 30908, "TRACKING": "1Z30Y8240246963074", "DESCRIPCION": "TOY", "REMITENTE": "AMAZON", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 29255, "TRACKING": "4.20331E+29", "DESCRIPCION": "APPAREL", "REMITENTE": "SHIPPING DPTO", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 31214, "TRACKING": "4.20331E+29", "DESCRIPCION": "TOY", "REMITENTE": "AMAZON", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 29639, "TRACKING": "4.20331E+29", "DESCRIPCION": "JEWERLY", "REMITENTE": "AMAZON", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 30152, "TRACKING": "4.20331E+29", "DESCRIPCION": "TOY", "REMITENTE": "AMAZON", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 30676, "TRACKING": "4.20331E+29", "DESCRIPCION": "BEAUTY", "REMITENTE": "AMAZON", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 30674, "TRACKING": "4.20331E+29", "DESCRIPCION": "CHARGER", "REMITENTE": "SHIPPING DPTO", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 30929, "TRACKING": "4.20331E+29", "DESCRIPCION": "DECORATION", "REMITENTE": "SHIPPING DPTO", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 31398, "TRACKING": "LW268665874CN", "DESCRIPCION": "SPINNER", "REMITENTE": "CHINA", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 30945, "TRACKING": "4.20331E+29", "DESCRIPCION": "DECORATION", "REMITENTE": "MARK LEWIS", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 30943, "TRACKING": "LW295554175CN", "DESCRIPCION": "APPAREL", "REMITENTE": "CHINA", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 28800, "TRACKING": "4.20331E+29", "DESCRIPCION": "DOC", "REMITENTE": "SHIPPING DPTO", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 28743, "TRACKING": "1ZY182670228364081", "DESCRIPCION": "APPAREL", "REMITENTE": "SHIPPING DPTO", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 28311, "TRACKING": "LW066612480CN", "DESCRIPCION": "SLIPPERS", "REMITENTE": "CHINA", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 29204, "TRACKING": "1ZY182671329139105", "DESCRIPCION": "APPAREL", "REMITENTE": "AMAZON", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 28640, "TRACKING": "1.0019E+33", "DESCRIPCION": "APPAREL", "REMITENTE": "AMAZON", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 27424, "TRACKING": "1Z88Y7Y20253812661", "DESCRIPCION": "APPAREL", "REMITENTE": "AMAZON", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 28750, "TRACKING": "TBA251582833000", "DESCRIPCION": "TOY", "REMITENTE": "AMAZON", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 28748, "TRACKING": "LX08190259", "DESCRIPCION": "TOY", "REMITENTE": "AMAZON", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 28827, "TRACKING": "4.20331E+29", "DESCRIPCION": "APPAREL", "REMITENTE": "FIFTH SUN", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 28135, "TRACKING": "1ZW22A160344903067", "DESCRIPCION": "APPAREL", "REMITENTE": "AMAZON", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 25397, "TRACKING": "4.20331E+29", "DESCRIPCION": "STICKERS", "REMITENTE": "SHIPPING DPTO", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 31179, "TRACKING": "4.20331E+29", "DESCRIPCION": "BEAUTY", "REMITENTE": "AMAZON", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" },
    { "PAQUETE": 24002, "TRACKING": "1ZWX93600321737970", "DESCRIPCION": "HOME ACC", "REMITENTE": "AMAZON", "PESO": 1.00, "PRECIO": 0.00, "SERVICIO": "NO" }];

  constructor() { }

  ngOnInit() {
  }

  toogleEditView() {
    this.isEditView = !this.isEditView;

  }

}

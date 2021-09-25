import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-carousel></app-carousel>
    <app-featured-products></app-featured-products>
    <app-about-us></app-about-us>
    <app-contact-us></app-contact-us>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

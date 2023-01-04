import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-summary',
  templateUrl: './patient-summary.page.html',
  styleUrls: ['./patient-summary.page.scss'],
})
export class PatientSummaryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true
  }

}

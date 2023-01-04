import { Component } from '@angular/core';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchTerm!: string;
   patients = [
    {
      "name": "Harshvardhan Shah",
      "healthcare": "Alca Healthcare",
      "mis": "MIS 2",
      "patient_id": "#76123456"
    },
    {
      "name": "Ishaan Laghari",
      "healthcare": "Alca Healthcare",
      "mis": "MIS 2",
      "patient_id": "#76123456"
    },
    {
      "name": "Kanan Babu",
      "healthcare": "Alca Healthcare",
      "mis": "MIS 2",
      "patient_id": "#76123456"
    },
    {
      "name": "Akanksha Gupta",
      "healthcare": "Alca Healthcare",
      "mis": "MIS 2",
      "patient_id": "#76123456"
    },
    {
      "name": "Harsh Shah",
      "healthcare": "Alca Healthcare",
      "mis": "MIS 2",
      "patient_id": "#76123456"
    },
    {
      "name": "Priy Rai",
      "healthcare": "Alca Healthcare",
      "mis": "MIS 3",
      "patient_id": "#76123456"
    },
    {
      "name": "Swapnil Joshi",
      "healthcare": "Alca Healthcare",
      "mis": "MIS 3",
      "patient_id": "#76123456"
    },
    {
      "name": "John Chakrabarti",
      "healthcare": "Alca Healthcare",
      "mis": "MIS 3",
      "patient_id": "#76123456"
    }

   ];

  constructor() {}

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facility-details',
  imports: [],
  templateUrl: './facility-details.html',
  styleUrl: './facility-details.css'
})
export class FacilityDetails {
  id = '';

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id') || '';
  }
}
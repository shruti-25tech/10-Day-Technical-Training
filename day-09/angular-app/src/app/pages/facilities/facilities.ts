import { Component, OnInit } from '@angular/core';
import { FacilityService } from '../../services/facility';

@Component({
  selector: 'app-facilities',
  imports: [],
  templateUrl: './facilities.html',
  styleUrl: './facilities.css'
})
export class Facilities implements OnInit {
  facilities: any[] = [];
  filtered: any[] = [];
  error = '';

  constructor(private service: FacilityService) {}

  ngOnInit() {
    this.service.getFacilities().subscribe({
      next: data => {
        this.facilities = data;
        this.filtered = data;
      },
      error: () => this.error = 'Unable to load API data'
    });
  }

  search(value: string) {
    this.filtered = this.facilities.filter(f =>
      f.name.toLowerCase().includes(value.toLowerCase())
    );
  }

  sort() {
    this.filtered.sort((a, b) => a.name.localeCompare(b.name));
  }
}
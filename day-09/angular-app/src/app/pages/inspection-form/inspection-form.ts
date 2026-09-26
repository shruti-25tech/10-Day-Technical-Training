import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inspection-form',
  imports: [ReactiveFormsModule],
  templateUrl: './inspection-form.html',
  styleUrl: './inspection-form.css'
})
export class InspectionForm {

  inspectionForm = new FormGroup({
    facilityId: new FormControl(''),
    cleanliness: new FormControl(''),
    complaints: new FormControl(''),
    inspectionDate: new FormControl('')
  });

  submitForm() {
    console.log(this.inspectionForm.value);
    alert('Inspection submitted successfully!');
  }
}
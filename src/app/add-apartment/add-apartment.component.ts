import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css'],
})
export class AddApartmentComponent {
  constructor(private fb: FormBuilder) {}

  aprtForm = this.fb.group({
    apartmentNumber: ['', Validators.required],
  });
}

import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slotform',
  templateUrl: './slotform.component.html',
  styleUrls: ['./slotform.component.scss']
})
export class SlotformComponent implements OnInit {
  appointmentForm: FormGroup;
  newObject = {
    name: '',
    contact: '',
    fromTime: '',
    toTime: ''
  };

  fromTime: string[] = [
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '05:00 PM',
    '05:30 PM',
    '06:00 PM',
    '06:30 PM',
    '07:00 PM',
    '07:30 PM',
    '08:00 PM',
    '08:30 PM',
  ];

  toTime: string[] = [
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '05:00 PM',
    '05:30 PM',
    '06:00 PM',
    '06:30 PM',
    '07:00 PM',
    '07:30 PM',
    '08:00 PM',
    '08:30 PM',
  ];

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<SlotformComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.appointmentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      fromTime: new FormControl('', Validators.required),
      toTime: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {

  }

  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  onSubmit() {
    if (this.newObject.name && this.newObject.fromTime && this.newObject.toTime && this.newObject.contact) {
      this.router.navigate(['/home', { newRecord: JSON.stringify(this.newObject) }]);
    }
    this.newObject = {
      name: '',
      contact: '',
      fromTime: '',
      toTime: ''
    };
  }

}

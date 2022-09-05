import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Timeslot } from '../model.ts/timeslot';
import { SlotformComponent } from '../slotform/slotform.component';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  toggle = true;
  status = 'Enable';
  selected!: Date | null;

  morningTimes: Timeslot[] = [
    {
      time1: "9:00 AM",
      time2: "9:30 AM",
      time3: "10:00 AM",
      time4: "10:30 AM",
      time5: "11:00 AM",
      time6: "11:30 AM",
    }
  ];

  eveningTimes: Timeslot[] = [
    {
      time1: "5:00 PM",
      time2: "5:30 PM",
      time3: "6:00 PM",
      time4: "6:30 PM",
      time5: "7:00 PM",
      time6: "7:30 PM",
    }
  ];

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  addSlot() {
    this.dialog.open(SlotformComponent);
  }

  enableBtnclr() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
}

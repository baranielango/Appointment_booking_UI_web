import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../model.ts/appointment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {

  }

  Appointment_DATA: Appointment[] = [
    { name: 'Varun Bose', contact: '9090190901', fromTime: '09:30 PM', toTime: '10:00 PM' },
    { name: 'Johny Ive', contact: '9090290902', fromTime: '10:30 PM', toTime: '11:00 PM' },
    { name: 'Emma', contact: '9090390903', fromTime: '09:00 PM', toTime: '09:30 PM' },
    { name: 'David', contact: '9090390903', fromTime: '10:00 PM', toTime: '10:30 PM' },
    { name: 'Emma', contact: '9090390903', fromTime: '09:00 PM', toTime: '09:30 PM' },
  ];

  displayedColumns = ['Name', 'contact', 'fromTime', 'toTime'];
  dataSource = new MatTableDataSource<Appointment>(this.Appointment_DATA);
  dataSource2 = new MatTableDataSource<Appointment>(this.Appointment_DATA);

  ngOnInit(): void {
    let record = this.route.snapshot.paramMap.get('newRecord');
    if (record != null) {
      if (!this.Appointment_DATA) {
        this.Appointment_DATA = [];
      }
      this.Appointment_DATA.push(JSON.parse(record));
    }

  }

  btnClick() {
    this.router.navigate(['/appointment']);
  };

}

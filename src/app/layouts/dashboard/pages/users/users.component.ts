import { Component } from '@angular/core';
import { User } from './models';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role'];
  dataSource: User[] = [
    {
      id: 1,
      firstName: 'Juan Francisco',
      lastName: 'Olivero',
      email: 'jolivero@gmail.com',
      password: 'JFOlivero99',
      role: 'ADMIN'
    },
    {
      id: 2,
      firstName: 'Javier Jesús',
      lastName: 'Minín',
      email: 'jminin@gmail.com',
      password: 'JJMinin99',
      role: 'USER'
    }
  ];
}

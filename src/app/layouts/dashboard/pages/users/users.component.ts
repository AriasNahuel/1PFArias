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
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'actions'];
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

  onUserSubmitted(ev: User): void {
    //this.dataSource.push(ev);
    this.dataSource = [...this.dataSource, {...ev, id: new Date().getTime()}];
  }

  onDeleteUser(id: number): void {
    // Filter out the user with the specified ID
    this.dataSource = this.dataSource.filter(user => user.id !== id);
  }

}

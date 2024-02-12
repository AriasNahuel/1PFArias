import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { UserDetailComponent } from '../users/pages/user-detail/user-detail.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CourseFormComponent } from './components/course-form/course-form.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDetailComponent,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'users/:id',
        component: UserDetailComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ]),
  ],
  exports: [
    CoursesComponent
  ],
})
export class CoursesModule { }

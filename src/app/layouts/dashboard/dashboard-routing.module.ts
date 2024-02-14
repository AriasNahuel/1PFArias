import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          { 
            path: 'home',
            loadChildren: () => import('./pages/home/home.module').then(
              (m) => m.HomeModule
            ),
          },
          
          {
            path: 'courses',
            loadChildren: () => 
            import('./pages/courses/courses.module').then(
              (m) => m.CoursesModule
            ),
          },

          {
            path: 'users',
            loadChildren: () => 
            import('./pages/users/users.module').then(
              (m) => m.UsersModule
            ),
          },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Course } from './models';
import { LoadingService } from '../../../../core/services/loading.service';
import { forkJoin } from 'rxjs';
import { CoursesService } from '../../../../core/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'hours', 'professor', 'actions'];
  dataSource: Course[] = [];

  constructor(private coursesService: CoursesService, private loadingService: LoadingService) {

  }

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(): void {
    this.loadingService.setIsLoading(true);

    forkJoin([
      this.coursesService.getCourses()
    ]).subscribe({
      next: (value) => {
        this.dataSource = value[0];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      }
    })
  }

  onCourseSubmitted(ev: Course): void {
    this.loadingService.setIsLoading(true);
    this.coursesService.createCourse({ ...ev, id: new Date().getTime() }).subscribe({
      next: (courses) => {
        this.dataSource = [...courses];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      }
    })
  }

  onDeleteCourse(ev: Course): void {
    this.loadingService.setIsLoading(true);
    this.coursesService.deleteCourse(ev.id).subscribe({
      next: (courses) => {
        this.dataSource = [...courses];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      }
    })
  }
}

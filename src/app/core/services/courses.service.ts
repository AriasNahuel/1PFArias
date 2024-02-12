import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';
import { Course } from '../../layouts/dashboard/pages/courses/models';

let COURSES_DB: Course[] = [
    {
        id: 1,
        name: 'Paradigmas de Programación',
        hours: 6,
        professor: 'Mario Rinaldi'
    },
    {
        id: 2,
        name: 'Sintaxis y Semántica del Lenguaje',
        hours: 4,
        professor: 'Mario Rinaldi'
    }
]

@Injectable({ providedIn: 'root' })
export class CoursesService {
    constructor(private alerts: AlertsService) { }

    getCourseById(id: number | string): Observable<Course | undefined> {
        return of(COURSES_DB.find((course) => course.id == id)).pipe(delay(1000));
    }
    getCourses() {
        return of(COURSES_DB).pipe(delay(1000));
    }
    createCourse(payload: Course) {
        COURSES_DB.push(payload);
        return this.getCourses();
    }
    deleteCourse(courseID: number) {
        COURSES_DB = COURSES_DB.filter((course) => course.id !== courseID);
        return this.getCourses().pipe(
            tap(() =>
                this.alerts.showSuccess('Realizado!', 'Se eliminó correctamente')
            )
        );
    }
}

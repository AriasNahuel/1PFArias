import { Component } from '@angular/core';
import { Observable, Subject, Subscriber, catchError, filter, map, of } from 'rxjs';
import { LoadingService } from '../../../../core/services/loading.service';
import { AlertsService } from '../../../../core/services/alerts.service';

@Component({
  selector: 'app-rxjs-introduccion',
  templateUrl: './rxjs-introduccion.component.html',
  styles: ``
})
export class RxjsIntroduccionComponent {
  numbersObservable$ = new Observable((Subscriber) => {
    Subscriber.next(1);
    Subscriber.next(2);
  })
  numbersSubject$ = new Subject();
  constructor(private loadingService: LoadingService, private alertService: AlertsService) {
    //Logica
    // this.subscribeToNumbersObservable();
    // this.subscribeToNumbersSubject();
    // this.numbersSubject$.next(1);
    // this.numbersSubject$.next(2);
    this.getUsuaios();
    //this.getTeachers();
  }

  subscribeToNumbersSubject(): void {
    this.numbersSubject$.subscribe({
      next: (numbers) => console.log('Numeros Subject: ', numbers),
    })
  }

  subscribeToNumbersObservable(): void {
    this.numbersObservable$.subscribe({
      next: (numbers) => console.log('Numeros Observable: ', numbers),
    })
  }

  getTeachers(): void {
    this.loadingService.setIsLoading(true);

    setTimeout(() => {
      this.loadingService.setIsLoading(false);
      console.log('Teachers');
    }, 5000);

  }

  getUsuaios(): void {
    const obs = new Observable<string[]>((subscriber) => {
      setTimeout(() => {
        //subscriber.error('404 Not Found');
        subscriber.next([]);
        subscriber.next(['Tomas', 'Matias', 'Josefina']);
        subscriber.complete();
      }, 2000)
    });
    this.loadingService.setIsLoading(true);
    obs
      .pipe(
        filter((data) => !!data.length), catchError((error) => {
          this.alertService.showError('Error al cargar los usuarios!');
          return of([]);
        }),
        map((data) => data.map((el) => el.toUpperCase)),
      ).subscribe({
        next: (usuarios) => {
          if (usuarios.length) {
            this.alertService.showSuccess('Realizado!', 'Se obtuvieron los alumnos');
          }

          //this.alertService.showError();
          console.log(usuarios);
        },
        error: (err) => { },
        //Complete: Cuando el observable deja definitivamente de emitir valores
        complete: () => {
          this.loadingService.setIsLoading(false);
        },
      })
  }
}

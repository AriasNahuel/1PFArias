import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrl: './rxjs-example.component.scss'
})
export class RxjsExampleComponent {
  loading = false;

  users: string[] = [];

  getUsersSubscription?: Subscription;

  constructor() {
    console.log('Se instancio la vista');
    setTimeout(() => {
      console.log('Timeout!');
    }, 1000);

    console.log('---- FIN ----');

    //this.getUsersFromPromise();
    //this.getUsersFromObservables();
  }

  getUsersFromObservables(): void {
    this.loading = true;
    const getUsers$ = new Observable<string[]>((subscriber) => {
      setTimeout(() => {
        subscriber.next(['Minato', 'Naruto', 'Kushina']);
      }, 2000);
    });
    this.getUsersSubscription = getUsers$.subscribe({
      //El observable emite valores
      next: (respuesta) => {
        this.loading = false;
        console.log(respuesta);
        this.users = respuesta;
      },
      //El observable emite errores
      error: () => {

      },
      //El observable finalizó y dejó de emitir valores
      complete: () => {
        this.loading = false;
      },
    });
  }

  getUsersFromPromise(): void {
    const getUsers = new Promise<string[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(['Goku', 'Gohan', 'Goten']);
      }, 2000)
    });
    this.loading = true;
    getUsers
      //Respuesta satisfactoria (resolve)
      .then((respuesta) => { this.users = respuesta })
      //Respuesta incorrecta/fallida (reject)
      .catch((error) => console.error(error))
      //Metodo que se ejecuta al finalizar la promesa, sin importar si se resolvio satisfactoriamente
      .finally(() => {
        this.loading = false;
      })
  }

}

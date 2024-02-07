import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '50260-pf-arias';

  isLoading = false;

  constructor(private loadingService: LoadingService){
    this.loadingService.loadingTriggered$.subscribe({
      next: (value) => {
        setTimeout(() => {
          this.isLoading = value;
        },);
      },
    })
  }
}

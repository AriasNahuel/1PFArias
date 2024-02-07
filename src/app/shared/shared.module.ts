import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { ResaltadoDirective } from './resaltado.directive';
import { TextSizeDirective } from './text-size.directive';



@NgModule({
  declarations: [
    FullNamePipe,
    ResaltadoDirective,
    TextSizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullNamePipe, ResaltadoDirective
  ]
})
export class SharedModule { }

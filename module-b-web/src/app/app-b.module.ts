import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BCardComponent } from './b-card/b-card.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [AppComponent, BCardComponent],
  imports: [
    CommonModule
  ],
  exports: [AppComponent, BCardComponent]
})
export class AppBModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BCardComponent } from './b-card/b-card.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AppComponent, BCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AppComponent, BCardComponent]
})
export class AppBModule { }

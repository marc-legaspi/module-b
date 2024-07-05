import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BCardComponent } from './b-card/b-card.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AppComponent, BCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ],
  exports: [AppComponent, BCardComponent],
  bootstrap: [AppComponent]
})
export class AppBModule { }

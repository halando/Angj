import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SzinvalsztoComponent } from './szinvalszto/szinvalszto.component';
import { DobozComponent } from './doboz/doboz.component';

@NgModule({
  declarations: [
    AppComponent,
    SzinvalsztoComponent,
    DobozComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

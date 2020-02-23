import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidenavComponent } from './slidenav/slidenav.component';
import { ProfilimComponent } from './profilim/profilim.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidenavComponent,
    ProfilimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

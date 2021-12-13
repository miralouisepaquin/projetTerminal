import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RechercheBateauComponent } from './recherche-bateau/recherche-bateau.component';
import { InfosBateauComponent } from './infos-bateau/infos-bateau.component';
import { PrixBateauComponent } from './prix-bateau/prix-bateau.component';

@NgModule({
  declarations: [
    AppComponent,
    RechercheBateauComponent,
    InfosBateauComponent,
    PrixBateauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

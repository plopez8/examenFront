import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Projecte/Components/list/list.component';
import { ProbaComponent } from './Projecte/Components/proba/proba.component';
import { LlistaSuperiorComponent } from './Projecte/Components/llista-superior/llista-superior.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProbaComponent,
    LlistaSuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

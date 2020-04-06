import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { HomeComponent } from './home/home.component';
import { PersonServiceService } from './person-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    ComponentThreeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

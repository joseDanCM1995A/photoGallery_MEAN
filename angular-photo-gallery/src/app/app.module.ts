import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // importando para que la app pueda hacer peticiones hhtp


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PothoFormComponent } from './components/potho-form/potho-form.component';
import { PothoPreviewComponent } from './components/potho-preview/potho-preview.component';
import { PothoListComponent } from './components/potho-list/potho-list.component';
import { AboutComponent } from './components/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PothoFormComponent,
    PothoPreviewComponent,
    PothoListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // poniendo el modulo en los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

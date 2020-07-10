import { PothoPreviewComponent } from './components/potho-preview/potho-preview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PothoListComponent } from './components/potho-list/potho-list.component';
import { PothoFormComponent } from './components/potho-form/potho-form.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {
    path: 'photos',
    component: PothoListComponent
  },
  {
    path: 'photos/new',
    component: PothoFormComponent
  },
  {
    path: 'photos/:id',
    component: PothoPreviewComponent
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

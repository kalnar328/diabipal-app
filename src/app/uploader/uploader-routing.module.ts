import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploaderPage } from './uploader.page';

const routes: Routes = [
  {
    path: '',
    component: UploaderPage
  },  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then( m => m.FormsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploaderPageRoutingModule {}

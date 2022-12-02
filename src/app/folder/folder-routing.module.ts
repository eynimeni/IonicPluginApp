import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)

  },
  {
    path: 'settings',
    loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)

  },
  {
    path: 'helppage',
    loadChildren: () => import('../helppage/helppage.module').then(m => m.HelppagePageModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}

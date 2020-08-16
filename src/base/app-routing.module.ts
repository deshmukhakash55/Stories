import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsContentComponent } from 'cards/cards-content/cards-content.component';
import { SocialFacadeComponent } from 'social/social-facade/social-facade.component';

const routes: Routes = [
  {
    path: '',
    component: CardsContentComponent,
    outlet: 'home'
  },
  {
    path: 'home',
    component: CardsContentComponent,
    outlet: 'home'
  },
  {
    path: 'social',
    component: SocialFacadeComponent,
    outlet: 'home'
  },
  {
    path: 'social/followers',
    component: SocialFacadeComponent,
    outlet: 'home'
  },
  {
    path: 'social/followings',
    component: SocialFacadeComponent,
    outlet: 'home'
  },
  {
    path: 'social/blockedUsers',
    component: SocialFacadeComponent,
    outlet: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

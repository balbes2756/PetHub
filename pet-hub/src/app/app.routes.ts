import { Routes } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { CommunityComponent } from './community/community.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'community', component: CommunityComponent },
];

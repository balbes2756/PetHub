import { Routes } from '@angular/router';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { CommunityComponent } from './pages/community/community.component';
import { HomeComponent } from './pages/home/home.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'profile', component: UserProfileComponent },
];

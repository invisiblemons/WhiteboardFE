import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthGuardService } from "./pages/login/auth-guard.service";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

const routes: Routes = [
  {
    path:'',
    component: AdminLayoutComponent,
    canActivate: [AuthGuardService],
    children : [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'reviewer',
        loadChildren: () => import('./pages/reviewer/reviewer.module').then(m => m.ReviewerModule)
      },
      {
        path: 'campaign',
        loadChildren: () => import('./pages/campaign/campaign.module').then(m => m.CampaignModule)
      },
      {
        path: 'university',
        loadChildren: () => import('./pages/university/university.module').then(m => m.UniversityModule)
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('./pages/login/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

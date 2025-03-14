import { VerifyCodeComponent } from './pages/verify-code/verify-code.component';
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NotFoundPagesComponent } from './pages/not-found-pages/not-found-pages.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
        title: 'login'
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
        title: 'register'
      },
      {
        path: 'forgot',
        loadComponent: () => import('./pages/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
        title: 'forgot'
      },
      {
        path: 'verify',
        loadComponent: () => import('./pages/verify-code/verify-code.component').then(m => m.VerifyCodeComponent),
        title: 'verify'
      },
      {
        path: 'setPassword',
        loadComponent: () => import('./pages/set-password/set-password.component').then(m => m.SetPasswordComponent),
        title: 'setPassword'
      }
    ]
  },
  {
    path: '**',
    component: NotFoundPagesComponent
  }
];

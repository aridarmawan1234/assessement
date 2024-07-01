import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'page',
    children: [
      { path: 'employee', loadChildren: () => import('./pages/employee/employee.module').then(m => m.EmployeeModule) },
      { path: 'employee-detail/:firstname', loadChildren: () => import('./pages/employee-detail/employee-detail.module').then(m => m.EmployeeDetailModule) },
      { path: 'add-employee', loadChildren: () => import('./pages/add-employee/add-employee.module').then(m => m.AddEmployeeModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

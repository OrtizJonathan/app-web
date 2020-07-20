import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'users', loadChildren: () =>
      import('./components/users/users.module').then(m => m.UserModule)
  },
  {
    path: 'rent/:rut/:celular/:correo', loadChildren: () =>
      import('./components/rent/rent.module').then(m => m.RentModule)
  },
  { path: '', redirectTo: `users`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

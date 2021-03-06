import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtablissementComponent } from './etablissement.component';
import { CreateComponent } from './create/create.component';
import { AdminGuard } from '../shared/authentication/admin.guard';


const routes: Routes = [
  {
    path: "",
    component: EtablissementComponent
  },
  {
    canActivate: [AdminGuard],
    path: 'create',
    component: CreateComponent
  },
  {
    path: ':etablissement_id/budget',
    loadChildren: () => import('./budget/budget.module').then(m => m.BudgetModule)
  },
  {
    path: 'recette',
    loadChildren: () => import('./recette/recette.module').then(m => m.RecetteModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtablissementRoutingModule { }

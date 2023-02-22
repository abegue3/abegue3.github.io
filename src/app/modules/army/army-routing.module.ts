import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArmyComponent } from './army.component';
import { ArmyCreationComponent } from './pages/army-creation/army-creation.component';
import { ArmyEditionComponent } from './pages/army-edition/army-edition.component';

const routes: Routes = [
  {
    path: 'creation',
    component: ArmyCreationComponent
  },
  {
    path: 'edition',
    component: ArmyEditionComponent
  },
  {
    path: '',
    component: ArmyComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArmyRoutingModule { }

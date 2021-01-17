import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HumanResourceComponent } from './human-resource.component';

const routes: Routes = [{ path: '', component: HumanResourceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourceRoutingModule { }

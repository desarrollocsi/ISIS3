import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDynamicComponent } from 'src/app/shared/components/form-dynamic/form-dynamic.component';

const routes: Routes = [{ path: '**', component: FormDynamicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FicheroRoutingModule {}

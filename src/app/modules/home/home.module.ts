import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home.component';
import { BindRouteInputComponent } from '../../components/tutorials/bind-route-input.component';
import { ControlFlowComponent } from '../../components/tutorials/control-flow.component';
import { DeferrableViewComponent } from '../../components/tutorials/deferrable-view.component';
import { ImageDirectiveComponent } from '../../components/tutorials/image-directive.component';
import { InputRequiredComponent } from '../../components/tutorials/input-required.component';
import { InputTransformComponent } from '../../components/tutorials/input-transform.component';
import { Model2WayBindingComponent } from '../../components/tutorials/model-2-way-binding.component';
import { NewDiComponent } from '../../components/tutorials/new-di.component';
import { NewHooksComponent } from '../../components/tutorials/new-hooks.component';
import { NewInputOutputComponent } from '../../components/tutorials/new-input-output.component';
import { SignalsApiComponent } from '../../components/tutorials/signals-api.component';
import { StandaloneApiComponent } from '../../components/tutorials/standalone-api.component';
import { StoreComponent } from '../../components/tutorials/store.component';
import { TypedFormsComponent } from '../../components/tutorials/typed-forms.component';
import { ViewChildQueryComponent } from '../../components/tutorials/view-child-query.component';
import { ViewTransitionApiComponent } from '../../components/tutorials/view-transition-api.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'typed-forms',
    component: TypedFormsComponent,
  },
  {
    path: 'new-di',
    component: NewDiComponent,
  },
  {
    path: 'standalone',
    component: StandaloneApiComponent,
  },
  {
    path: 'signals',
    component: SignalsApiComponent,
  },
  {
    path: 'image-directive',
    component: ImageDirectiveComponent,
  },
  {
    path: 'input-required',
    component: InputRequiredComponent,
  },
  {
    path: 'bind-route-to-input',
    component: BindRouteInputComponent,
  },
  {
    path: 'control-flow',
    component: ControlFlowComponent,
  },
  {
    path: 'view-transition-api',
    component: ViewTransitionApiComponent,
  },
  {
    path: 'deferrable-view',
    component: DeferrableViewComponent,
  },
  {
    path: 'new-hooks',
    component: NewHooksComponent,
  },
  {
    path: 'input-transform',
    component: InputTransformComponent,
  },
  {
    path: 'new-input-output',
    component: NewInputOutputComponent,
  },
  {
    path: 'model-2-way-binding',
    component: Model2WayBindingComponent,
  },
  {
    path: 'view-child-query',
    component: ViewChildQueryComponent,
  },
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: '**',
    redirectTo: ''

  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModule { }

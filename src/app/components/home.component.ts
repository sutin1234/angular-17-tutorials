import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <p>Welcome to the Angular Standalone App!</p>
        @for (route of routes; track $index) {
          <div>
             <a [routerLink]="route.path">{{ $index+1 }}. {{ route.name}}</a>
          </div>
        }
    </div>
  `,
  styles: ``
})
export class HomeComponent {

  routes = [
    { path: 'standalone', name: 'standalone API' },
    { path: 'typed-forms', name: 'typed forms' },
    { path: 'new-di', name: 'new DI' },
    { path: 'signals', name: 'signals API' },
    { path: 'image-directive', name: 'image Directive' },
    { path: 'input-required', name: 'input required' },
    { path: 'bind-route-to-input', name: 'bind route data to input' },
    { path: 'control-flow', name: 'control flow' },
    { path: 'view-transition-api', name: 'view transition api' },
    { path: 'deferrable-view', name: 'deferrableview' },
    { path: 'new-hooks', name: 'new lifecycle hooks' },
    { path: 'input-transform', name: 'input transform' },
    { path: 'new-input-output', name: 'new input output' },
    { path: 'model-2-way-binding', name: 'model 2 way binding' },
    { path: 'view-child-query', name: 'view child query' },
    { path: 'store', name: 'ngrx store' },
  ]

}

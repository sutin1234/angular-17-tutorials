import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { appEffects, appStore } from './stores/store';
import { ToDoService } from './stores/todo.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withViewTransitions(),
      withComponentInputBinding(),
    ),
    provideClientHydration(),
    provideHttpClient(),
    provideStore(appStore),
    provideEffects(appEffects),
    ToDoService,
  ]
};

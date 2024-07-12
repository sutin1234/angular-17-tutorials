import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { loadTodos, loadTodosFailure, loadTodosSuccess } from "./actions";
import { ToDoService } from "./todo.service";

@Injectable()
export class TodoEffects {

    actions$ = inject(Actions)
    todoService$ = inject(ToDoService)

    loadTodos$ = createEffect(() => this.actions$.pipe(
        ofType(loadTodos),
        mergeMap(() =>
            this.todoService$.getAll().pipe(
                map((todos) => loadTodosSuccess({ todos })),
                tap((data) => console.log('tab todos effected: ', data)),
                catchError((error) => of(loadTodosFailure({ error: error.message }))
                )
            )
        )
    )
    );
}
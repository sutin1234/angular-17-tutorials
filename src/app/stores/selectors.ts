import { createSelector } from "@ngrx/store";
import { AppState } from './store';

export const selectTodos = (state: AppState) => state.todo.todos;
export const selectLoading = (state: AppState) => state.todo.loading;

export const todosSelector = createSelector(
    selectTodos,
    (todos) => todos
);
export const loadingSelector = createSelector(
    selectLoading,
    (todos) => todos
);
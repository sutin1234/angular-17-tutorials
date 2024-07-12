import { createReducer, on } from "@ngrx/store";
import { addTodo, deleteTodo, loadTodos, loadTodosFailure, loadTodosSuccess, updateTodo } from "./actions";
import { Todo } from "./todo.model";

export interface TodoState {
    todos: Todo[];
    loading: boolean;
    error: string;
}
export const initialState: TodoState = {
    todos: [],
    loading: false,
    error: ''
};
export const todoReducer = createReducer(
    initialState,

    on(loadTodos, state => ({ ...state, loading: true })),
    on(loadTodosSuccess, (state, { todos }) => ({ ...state, todos, loading: false })),
    on(loadTodosFailure, (state, { error }) => ({ ...state, error, loading: false })),
    on(addTodo, (state, { todo }) => ({ ...state, todos: [...state.todos, todo] })),
    on(updateTodo, (state, { todo }) => ({ ...state, todos: state.todos.map(t => t.id === todo.id ? todo : t) })),
    on(deleteTodo, (state, { id }) => ({ ...state, todos: state.todos.filter(t => t.id !== id) })),
)

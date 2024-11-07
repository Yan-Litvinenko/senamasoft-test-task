import { type TodoType } from './Todo.interface';

export type SliceTodo = {
    todos: TodoType[];
    isLoad: boolean;
    error: boolean;
};

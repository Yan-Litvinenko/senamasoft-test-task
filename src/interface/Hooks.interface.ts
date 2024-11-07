import type { AddTodoFormType, TodoType } from './Todo.interface';
import type { FormInstance, Form } from 'antd';

export type UseAddTodo = {
    onFinish: (values: AddTodoFormType) => void;
    form: FormInstance<AddTodoFormType>;
    contextHolder: React.ReactNode;
    Form: typeof Form;
};

export type UseTodoList = {
    todos: TodoType[];
    isLoad: boolean;
    error: boolean;
};

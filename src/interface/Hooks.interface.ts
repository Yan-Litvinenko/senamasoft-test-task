import type { AddTodoFormType, TodoType } from './Todo.interface';
import type { FormInstance, Form } from 'antd';

export type UseAddTodo = () => {
    onFinish: (values: AddTodoFormType) => void;
    form: FormInstance<AddTodoFormType>;
    contextHolder: React.ReactNode;
    Form: typeof Form;
};

export type UseTodoList = () => {
    todos: TodoType[];
    isLoad: boolean;
    error: boolean;
};

export type UseDeleteTodo = (
    todo: TodoType,
    showSuccess: MessageFunction,
    showError: MessageFunction,
) => {
    handleDeleteTodo: () => Promise<void>;
};

export type UseEditTodo = (
    todo: TodoType,
    showSuccess: MessageFunction,
    showError: MessageFunction,
) => {
    isEditing: boolean;
    editedTitle: string;
    editedDescription: string;
    handleSave: () => Promise<void>;
    handleCancel: () => void;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    setEditedTitle: React.Dispatch<React.SetStateAction<string>>;
    setEditedDescription: React.Dispatch<React.SetStateAction<string>>;
};

export type MessageFunction = (content: string) => void;
export type UseMessage = () => {
    showSuccess: MessageFunction;
    showError: MessageFunction;
    contextHolder: React.ReactNode;
};

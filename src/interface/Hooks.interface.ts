import { TodoType } from './Todo.interface';
import type { FormErrors } from '@/hooks/useAddTodo';

export type UseAddTodo = () => {
    setTitle: (value: string) => void;
    setDescription: (value: string) => void;
    handleSubmit: () => Promise<void>;
    description: string;
    isLoading: boolean;
    errors: FormErrors;
    title: string;
};

export type UseTodoList = () => {
    todos: TodoType[];
    isLoad: boolean;
    error: boolean;
};

export type UseDeleteTodo = (todo: TodoType) => {
    handleDeleteTodo: () => Promise<void>;
};

export type UseEditTodo = (todo: TodoType) => {
    isEditing: boolean;
    editedTitle: string;
    editedDescription: string;
    editedCompleted: boolean;
    handleSave: () => Promise<void>;
    handleCancel: () => void;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    setEditedTitle: React.Dispatch<React.SetStateAction<string>>;
    setEditedDescription: React.Dispatch<React.SetStateAction<string>>;
    setEditedCompleted: React.Dispatch<React.SetStateAction<boolean>>;
};

import type { ObjectId } from 'mongodb';

export type TodoType = {
    _id: ObjectId;
    completed: boolean;
    description: string;
    title: string;
};

export type AddTodoFormType = Omit<TodoType, 'completed'>;

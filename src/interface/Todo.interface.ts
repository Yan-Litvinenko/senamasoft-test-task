export type TodoType = {
    _id: string;
    completed: boolean;
    description: string;
    title: string;
};

export type AddTodoFormType = Omit<TodoType, 'completed'>;

export type TodoType = {
    title: string;
    description: string;
    completed: boolean;
};

export type AddTodoFormType = Omit<TodoType, 'completed'>;

import type { TodoType } from '../interface/Todo.interface';

export const getTodoList = async (): Promise<TodoType[]> => {
    const API_URL: string = process.env.SERVER_API!;
    const response = await fetch(`${API_URL}/todos`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to create todo');
    }

    return response.json();
};

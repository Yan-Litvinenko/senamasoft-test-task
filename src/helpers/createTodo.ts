import type { TodoType } from '../interface/Todo.interface';

export const createTodo = async (data: Omit<TodoType, '_id'>): Promise<TodoType> => {
    const API_URL: string = process.env.SERVER_API!;
    const response = await fetch(`${API_URL}/todo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to create todo');
    }

    return response.json();
};

import type { TodoType } from '../interface/Todo.interface';
import { SERVER_API } from '@env';

export const createTodo = async (data: Omit<TodoType, '_id'>): Promise<TodoType> => {
    const response = await fetch(`${SERVER_API}/todo`, {
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

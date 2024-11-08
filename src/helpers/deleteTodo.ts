import { SERVER_API } from '@env';

export const deleteTodo = async (id: string): Promise<Response> => {
    const response = await fetch(`${SERVER_API}/todo/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to delete todo');
    }

    return response.json();
};

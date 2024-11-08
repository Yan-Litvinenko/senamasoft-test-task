import { SERVER_API } from '@env';

export const editTodo = async (
    id: string,
    title: string,
    description: string,
    completed: boolean,
): Promise<Response> => {
    const response = await fetch(`${SERVER_API}/todo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, completed }),
    });

    return response;
};

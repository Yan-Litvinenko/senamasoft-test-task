import type { ObjectId } from 'mongodb';

export const editTodo = async (
    id: ObjectId,
    title: string,
    description: string,
    completed: boolean,
): Promise<Response> => {
    const response = await fetch(`${process.env.SERVER_API}/todo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, completed }),
    });

    return response;
};

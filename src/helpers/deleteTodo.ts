import type { ObjectId } from 'mongodb';

export const deleteTodo = async (id: ObjectId): Promise<void> => {
    const response = await fetch(`${process.env.SERVER_API}/todo/${id}`, {
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

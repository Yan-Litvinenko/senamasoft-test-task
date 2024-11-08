export const editTodo = async (
    id: string,
    title: string,
    description: string,
): Promise<Response> => {
    const response = await fetch(`${process.env.SERVER_API}/todo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
    });

    return response;
};

import type { Response, Request } from 'express';
import { getTodosCollection } from '../db/getTodosCollection';

export const getTodoList = async (_: Request, res: Response): Promise<void> => {
    try {
        const todosCollection = await getTodosCollection();
        const todos = await todosCollection.find().toArray();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get todo list' });
    }
};

import type { Response, Request } from 'express';
import { getTodosCollection } from '../db/getTodosCollection';
import type { Todo } from '../interfaces/collection.interface';

export const createTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const newTodo = req.body as Todo;
        const todosCollection = await getTodosCollection();
        await todosCollection.insertOne(newTodo);
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

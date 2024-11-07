import { getTodosCollection } from '../db/getTodosCollection';
import type { Response, Request } from 'express';
import type { Todo } from '../interfaces/collection.interface';

export const createTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const newTodo = req.body as Todo;
        const todosCollection = await getTodosCollection();
        const createdTodo = await todosCollection.insertOne(newTodo);
        res.status(201).json(createdTodo);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

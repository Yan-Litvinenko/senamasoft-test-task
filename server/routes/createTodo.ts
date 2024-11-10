import { getTodosCollection } from '../db/getTodosCollection';
import { ObjectId } from 'mongodb';
import type { Response, Request } from 'express';
import type { Todo } from '../interfaces/collection.interface';

export const createTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const newTodo = req.body as Todo;
        const todosCollection = await getTodosCollection();
        const result = await todosCollection.insertOne(newTodo);

        if (!result.acknowledged) {
            throw new Error('Failed to create todo');
        }

        const createdTodo = await todosCollection.findOne({
            _id: new ObjectId(result.insertedId),
        });

        res.status(201).json(createdTodo);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

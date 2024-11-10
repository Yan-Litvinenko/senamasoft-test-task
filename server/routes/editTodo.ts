import { getTodosCollection } from '../db/getTodosCollection';
import { ObjectId } from 'mongodb';
import type { Response, Request } from 'express';
import type { Todo } from '../interfaces/collection.interface';
import type { Collection, UpdateResult } from 'mongodb';

export const editTodo = async (req: Request, res: Response): Promise<void> => {
    const { title, description, completed } = req.body;
    const { id } = req.params;

    try {
        const collection: Collection<Todo> = await getTodosCollection();
        const result: UpdateResult<Todo> = await collection.updateOne(
            { _id: new ObjectId(id) },
            {
                $set: { title, description, completed },
            },
        );

        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

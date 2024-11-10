import { getTodosCollection } from '../db/getTodosCollection';
import { type Collection, type DeleteResult, ObjectId } from 'mongodb';
import type { Response, Request } from 'express';
import type { Todo } from '../interfaces/collection.interface';

export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const collection: Collection<Todo> = await getTodosCollection();
        const result: DeleteResult = await collection.deleteOne({
            _id: new ObjectId(id) as ObjectId,
        });

        if (result.deletedCount === 0) {
            res.status(404).json({ message: 'Todo not found' });
            return;
        }

        res.status(200).json({
            ok: true,
            message: 'Todo deleted successfully',
        });
    } catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
};

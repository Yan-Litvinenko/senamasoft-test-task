import { connectToDataBase } from './connection';
import type { Collection } from 'mongodb';
import type { Todo } from '../interfaces/collection.interface';

export const getTodosCollection = async (): Promise<Collection<Todo>> => {
    const db = await connectToDataBase();
    return db.collection<Todo>('todos');
};

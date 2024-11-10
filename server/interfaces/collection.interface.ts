import type { ObjectId } from 'mongodb';

export type Todo = {
    _id: ObjectId;
    completed: boolean;
    description: string;
    title: string;
};

import { MongoClient } from 'mongodb';
import type { Db } from 'mongodb';

let db: Db | null = null;

export const connectToDataBase = async (): Promise<Db> => {
    console.log('connectToDataBase');
    if (db) return db;

    try {
        const client = new MongoClient(process.env.MONGO_DB!);
        await client.connect();
        db = client.db('todo-app');
        console.log('Successfully connected to database');
        return db;
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};

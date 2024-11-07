import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import type { Express, Request, Response } from 'express';
import { getTodoList } from './server/routes/getTodoList';
import { createTodo } from './server/routes/createTodo';
import { deleteTodo } from './server/routes/deleteTodo';
import { editTodo } from './server/routes/editTodo';
import { getTodosCollection } from './server/db/getTodosCollection';
import type { Todo } from './server/interfaces/collection.interface';

dotenv.config();

const PORT: number = Number(process.env.PORT) || 3000;
const app: Express = express();
const httpServer = http.createServer(app);

(async (): Promise<void> => {
    const todosCollection = await getTodosCollection();
    const todos: Todo[] = await todosCollection.find().toArray();
    console.log(todos);
})();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/todos', getTodoList);
app.post('/api/todos', createTodo);
app.delete('/api/todos/:id', deleteTodo);
app.put('/api/todos/:id', editTodo);

app.use((err: Error, _: Request, res: Response) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
});

app.get('*', (_: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

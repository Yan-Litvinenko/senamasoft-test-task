import React from 'react';
import { getTodoList } from '../helpers/getTodoList';
import type { TodoType } from '../interface/Todo.interface';
import type { UseTodosLoad } from '../interface/Hooks.interface';

export const useTodosLoad = (): UseTodosLoad => {
    const [todos, setTodos] = React.useState<TodoType[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [isError, setIsError] = React.useState<boolean>(false);

    React.useEffect((): void => {
        const fetchTodos = async (): Promise<void> => {
            try {
                const data: TodoType[] = await getTodoList();
                setTodos(data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch todos:', error);
                setIsError(true);
                setLoading(false);
            }
        };

        fetchTodos();
    }, []);

    return [todos, loading, isError];
};

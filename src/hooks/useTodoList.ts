import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todosLoad } from '../redux/todosSlice';
import { todosSelector } from '../redux/todosSelector';
import type { AppDispatch } from '../redux/store';
import type { TodoType } from '../interface/Todo.interface';
import type { UseTodoList } from '../interface/Hooks.interface';

export const useTodoList = (): UseTodoList => {
    const dispatch = useDispatch<AppDispatch>();
    const todos: TodoType[] = useSelector(todosSelector).todos;
    const isLoad: boolean = useSelector(todosSelector).isLoad;
    const error: boolean = useSelector(todosSelector).error;

    React.useEffect(() => {
        dispatch(todosLoad());
    }, [dispatch]);

    return { todos, isLoad, error };
};

import { useDispatch } from 'react-redux';
import { deleteTodo } from '@/redux/todosSlice';
import { deleteTodo as deleteTodoHelper } from '@/helpers/deleteTodo';
import type { UseDeleteTodo } from '../interface/Hooks.interface';
import type { TodoType } from '../interface/Todo.interface';

export const useDeleteTodo: UseDeleteTodo = (todo: TodoType) => {
    const dispatch = useDispatch();

    const handleDeleteTodo = async (): Promise<void> => {
        if (!todo || !todo._id) {
            console.error('Invalid todo object:', todo);
            return;
        }

        try {
            const response = await deleteTodoHelper(todo._id.toString());

            if (!response.ok) {
                throw new Error('Ошибка при удалении задачи');
            }

            dispatch(deleteTodo(todo));
        } catch (error) {
            console.error('Ошибка при удалении задачи:', error);
        }
    };

    return { handleDeleteTodo };
};

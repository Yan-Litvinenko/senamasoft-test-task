import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/todosSlice';
import type { AppDispatch } from '../redux/store';
import type { MessageFunction, UseDeleteTodo } from '../interface/Hooks.interface';
import type { TodoType } from '../interface/Todo.interface';

export const useDeleteTodo: UseDeleteTodo = (
    todo: TodoType,
    showSuccess: MessageFunction,
    showError: MessageFunction,
) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleDeleteTodo = async (): Promise<void> => {
        try {
            const response = await fetch(`${process.env.SERVER_API}/todo/${todo._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete todo');
            }

            dispatch(deleteTodo(todo));
            showSuccess('Todo deleted successfully!');
        } catch (error) {
            console.error('Error deleting todo:', error);
            showError('Failed to delete todo');
        }
    };

    return { handleDeleteTodo };
};

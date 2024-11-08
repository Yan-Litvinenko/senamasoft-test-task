import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/todosSlice';
import { deleteTodo as deleteTodoHelper } from '../helpers/deleteTodo';
import { useMessageContext } from '../hoc/MessageContext';
import type { AppDispatch } from '../redux/store';
import type { UseDeleteTodo } from '../interface/Hooks.interface';
import type { TodoType } from '../interface/Todo.interface';

export const useDeleteTodo: UseDeleteTodo = (todo: TodoType) => {
    const dispatch = useDispatch<AppDispatch>();
    const { showSuccess, showError } = useMessageContext();

    const handleDeleteTodo = async (): Promise<void> => {
        try {
            await deleteTodoHelper(todo._id);
            dispatch(deleteTodo(todo));
            showSuccess('Todo deleted successfully!');
        } catch (error) {
            console.error('Error deleting todo:', error);
            showError('Failed to delete todo');
        }
    };

    return { handleDeleteTodo };
};

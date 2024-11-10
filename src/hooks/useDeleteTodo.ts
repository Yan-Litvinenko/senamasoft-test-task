import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '@/redux/todosSlice';
import { deleteTodo as deleteTodoHelper } from '@/helpers/deleteTodo';
import type { UseDeleteTodo } from '../interface/Hooks.interface';
import type { TodoType } from '../interface/Todo.interface';

export const useDeleteTodo: UseDeleteTodo = (todo: TodoType) => {
    const dispatch = useDispatch();

    const handleDeleteTodo = async (): Promise<void> => {
        // Проверка наличия todo и _id
        if (!todo || !todo._id) {
            console.error('Invalid todo object:', todo);
            Alert.alert('Error', 'Invalid todo data');
            return;
        }

        try {
            const response = await deleteTodoHelper(todo._id.toString());

            if (!response || !response.ok) {
                throw new Error('Ошибка при удалении задачи');
            }

            dispatch(deleteTodo(todo));
            Alert.alert('Успешно', 'Задача успешно удалена!', [{ text: 'OK' }]);
        } catch (error) {
            console.error('Ошибка при удалении задачи:', error);
            Alert.alert('Ошибка', 'Не удалось удалить задачу. Попробуйте еще раз.', [
                { text: 'OK' },
            ]);
        }
    };

    return { handleDeleteTodo };
};

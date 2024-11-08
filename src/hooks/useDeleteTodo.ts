import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '@/redux/todosSlice';
import { deleteTodo as deleteTodoHelper } from '@/helpers/deleteTodo';
import type { UseDeleteTodo } from '../interface/Hooks.interface';
import type { TodoType } from '../interface/Todo.interface';

export const useDeleteTodo: UseDeleteTodo = (todo: TodoType) => {
    const dispatch = useDispatch();

    const handleDeleteTodo = async (): Promise<void> => {
        Alert.alert(
            'Delete Todo',
            'Are you sure you want to delete this todo?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            const response = await deleteTodoHelper(todo._id);

                            if (response.ok) {
                                dispatch(deleteTodo(todo));
                                Alert.alert('Success', 'Todo deleted successfully!', [
                                    { text: 'OK' },
                                ]);
                            } else {
                                throw new Error('Failed to delete todo');
                            }
                        } catch (error) {
                            console.error('Error deleting todo:', error);
                            Alert.alert('Error', 'Failed to delete todo', [{ text: 'OK' }]);
                        }
                    },
                },
            ],
            { cancelable: true },
        );
    };

    return { handleDeleteTodo };
};

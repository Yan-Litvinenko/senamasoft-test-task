import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/todosSlice';
import type { TodoType } from '../interface/Todo.interface';
import type { AppDispatch } from '../redux/store';
import type { UseDeleteTodo } from '../interface/Hooks.interface';

export const useDeleteTodo: UseDeleteTodo = (todo: TodoType) => {
    const dispatch = useDispatch<AppDispatch>();
    const [messageApi, contextHolder] = message.useMessage();

    const success = (): void => {
        messageApi.open({
            type: 'success',
            content: 'Todo deleted successfully!',
        });
    };

    const handleDeleteTodo = async (): Promise<void> => {
        try {
            const response = await fetch(`${process.env.SERVER_API}/todos/${todo._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete todo');
            }

            dispatch(deleteTodo(todo));
            success();
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return { handleDeleteTodo, contextHolder };
};

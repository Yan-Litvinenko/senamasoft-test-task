import { addTodo } from '../redux/todosSlice';
import { createTodo } from '../helpers/createTodo';
import { message, Form } from 'antd';
import { useDispatch } from 'react-redux';
import type { AddTodoFormType, TodoType } from '../interface/Todo.interface';
import type { AppDispatch } from '../redux/store';
import type { FormProps } from 'antd';
import type { UseAddTodo } from '../interface/Hooks.interface';

export const useAddTodo: UseAddTodo = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish: FormProps<AddTodoFormType>['onFinish'] = async (values): Promise<void> => {
        try {
            const newTodo: TodoType = await createTodo({ ...values, completed: false });

            if (newTodo) {
                dispatch(addTodo(newTodo));
            }

            messageApi.success('Todo created successfully!');
            form.resetFields();
        } catch (error) {
            messageApi.error('Failed to create todo!');
            console.error('Error creating todo:', error);
        }
    };

    return { onFinish, form, contextHolder, Form };
};

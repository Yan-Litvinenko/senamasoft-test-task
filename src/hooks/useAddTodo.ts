import { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/redux/todosSlice';
import { createTodo } from '@/helpers/createTodo';
import type { TodoType } from '@/interface/Todo.interface';
import type { UseAddTodo } from '@/interface/Hooks.interface';
import type { AppDispatch } from '@/redux/store';

export interface FormErrors {
    title?: string;
    description?: string;
}

export const useAddTodo: UseAddTodo = (navigation) => {
    const dispatch = useDispatch<AppDispatch>();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!title.trim()) {
            newErrors.title = 'Title is required';
        }
        if (!description.trim()) {
            newErrors.description = 'Description is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setErrors({});
    };

    const handleSubmit = async (): Promise<void> => {
        if (!validateForm()) return;

        setIsLoading(true);
        try {
            const todoData: Omit<TodoType, '_id'> = {
                title: title.trim(),
                description: description.trim(),
                completed: false,
            };

            const newTodo = await createTodo(todoData);

            if (newTodo) {
                dispatch(addTodo(newTodo));
                Alert.alert('Success', 'Todo created successfully!', [
                    {
                        text: 'OK',
                        onPress: () => {
                            resetForm();
                            navigation.goBack();
                        },
                    },
                ]);
            }
        } catch (error) {
            console.error('Error creating todo:', error);
            Alert.alert('Error', 'Failed to create todo!', [{ text: 'OK' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        title,
        setTitle,
        description,
        setDescription,
        handleSubmit,
        isLoading,
        resetForm,
        errors,
    };
};

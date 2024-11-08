import React from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/todosSlice';
import type { AppDispatch } from '../redux/store';
import type { TodoType } from '../interface/Todo.interface';
import type { UseEditTodo, MessageFunction } from '../interface/Hooks.interface';

export const useEditTodo: UseEditTodo = (
    todo: TodoType,
    showSuccess: MessageFunction,
    showError: MessageFunction,
) => {
    const dispatch = useDispatch<AppDispatch>();

    const { title, description } = todo;

    const [isEditing, setIsEditing] = React.useState(false);
    const [editedTitle, setEditedTitle] = React.useState(title);
    const [editedDescription, setEditedDescription] = React.useState(description);

    const handleSave = async (): Promise<void> => {
        try {
            const response = await fetch(`${process.env.SERVER_API}/todo/${todo._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: editedTitle, description: editedDescription }),
            });

            if (response.ok) {
                dispatch(editTodo({ ...todo, title: editedTitle, description: editedDescription }));
                setIsEditing(false);
                showSuccess('Todo updated successfully!');
            }
        } catch (error) {
            console.error(error);
            showError('Failed to update todo');
        }
    };

    const handleCancel = (): void => {
        setEditedTitle(title);
        setEditedDescription(description);
        setIsEditing(false);
    };

    return {
        isEditing,
        editedTitle,
        editedDescription,
        handleSave,
        handleCancel,
        setIsEditing,
        setEditedTitle,
        setEditedDescription,
    };
};

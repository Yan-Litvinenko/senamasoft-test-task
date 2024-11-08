import React from 'react';
import { useDispatch } from 'react-redux';
import { useMessageContext } from '../hoc/MessageContext';
import { editTodo } from '../redux/todosSlice';
import { editTodo as editTodoHelper } from '../helpers/editTodo';
import type { AppDispatch } from '../redux/store';
import type { TodoType } from '../interface/Todo.interface';
import type { UseEditTodo } from '../interface/Hooks.interface';

export const useEditTodo: UseEditTodo = (todo: TodoType) => {
    const dispatch = useDispatch<AppDispatch>();

    const { title, description, completed } = todo;

    const [isEditing, setIsEditing] = React.useState(false);
    const [editedTitle, setEditedTitle] = React.useState(title);
    const [editedDescription, setEditedDescription] = React.useState(description);
    const [editedCompleted, setEditedCompleted] = React.useState(completed);

    const { showSuccess, showError } = useMessageContext();

    const handleSave = async (): Promise<void> => {
        try {
            const response = await editTodoHelper(
                todo._id,
                editedTitle,
                editedDescription,
                editedCompleted,
            );

            if (response.ok) {
                dispatch(
                    editTodo({
                        ...todo,
                        title: editedTitle,
                        description: editedDescription,
                        completed: editedCompleted,
                    }),
                );
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
        editedCompleted,
        handleSave,
        handleCancel,
        setIsEditing,
        setEditedTitle,
        setEditedDescription,
        setEditedCompleted,
    };
};

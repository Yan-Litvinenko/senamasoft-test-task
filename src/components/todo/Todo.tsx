import React from 'react';
import type { TodoType } from '../../interface/Todo.interface';

export const Todo = ({ title, description, completed }: TodoType): React.JSX.Element => {
    return (
        <div>
            <span>Name: {title}</span>
            <span>Description: {description}</span>
            <span>Status: {completed ? 'Completed' : 'Not completed'}</span>
        </div>
    );
};

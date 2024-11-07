import React from 'react';
import styles from './Todo.module.scss';
import type { TodoType } from '../../interface/Todo.interface';

export const Todo = ({ title, description, completed }: TodoType): React.JSX.Element => {
    return (
        <div className={styles.todo}>
            <span>Name: {title}</span>
            <span>Description: {description}</span>
            <span>Status: {completed ? 'Completed' : 'Not completed'}</span>
        </div>
    );
};

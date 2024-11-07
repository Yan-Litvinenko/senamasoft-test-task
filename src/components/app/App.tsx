import React from 'react';
import styles from './App.module.scss';
import { Typography } from 'antd';
import { AddTodoForm } from '../addTodoForm/AddTodoForm';
import { TodoList } from '../todoList/TodoList';

const { Title } = Typography;

export const App = (): React.JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Typography>
                <Title className={styles.title} level={1}>
                    Todo List
                </Title>
            </Typography>
            <div className={styles.content}>
                <TodoList />
                <AddTodoForm />
            </div>
        </div>
    );
};

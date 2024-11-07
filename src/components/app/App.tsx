import React from 'react';
import { Typography } from 'antd';
import { AddTodoForm } from '../addTodoForm/AddTodoForm';
import { TodoList } from '../todoList/TodoList';
import styles from './App.module.scss';

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

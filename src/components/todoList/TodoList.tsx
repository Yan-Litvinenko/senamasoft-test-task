import React from 'react';
import styles from './TodoList.module.scss';
import { List, Spin } from 'antd';
import { Todo } from '../todo/Todo';
import { useTodoList } from '../../hooks/useTodoList';

export const TodoList = (): React.JSX.Element => {
    const { todos, isLoad, error } = useTodoList();

    if (error) {
        return <>Error loading todo list</>;
    }

    if (isLoad) {
        return <Spin />;
    }

    return (
        <List
            className={styles.list}
            itemLayout="vertical"
            dataSource={todos}
            renderItem={(todo): React.JSX.Element => (
                <List.Item>
                    <Todo {...todo} />
                </List.Item>
            )}
        />
    );
};

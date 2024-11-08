import React from 'react';
import styles from './TodoList.module.scss';
import { List, Spin, Typography } from 'antd';
import { Todo } from '../../components/todo/Todo';
import { useTodoList } from '../../hooks/useTodoList';

const { Title } = Typography;

export const TodoList = (): React.JSX.Element => {
    const { todos, isLoad, error } = useTodoList();

    if (error) {
        return <>Error loading todo list</>;
    }

    if (isLoad) {
        return <Spin />;
    }

    return (
        <div className={styles.todo_list}>
            <Typography>
                <Title level={1}>Todo list</Title>
            </Typography>
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
        </div>
    );
};

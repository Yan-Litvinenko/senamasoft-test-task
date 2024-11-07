import React from 'react';
import { List, Spin } from 'antd';
import { Todo } from '../todo/Todo';
import { useTodosLoad } from '../../hooks/useTodosLoad';

export const TodoList = (): React.JSX.Element => {
    const [todos, loading, error] = useTodosLoad();

    if (error) {
        return <>Error loading todo list</>;
    }

    if (loading) {
        return <Spin />;
    }

    return (
        <List
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

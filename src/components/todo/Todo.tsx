import React from 'react';
import styles from './Todo.module.scss';
import { Button, Input, Space, Typography } from 'antd';
import { EditOutlined, DeleteOutlined, SaveOutlined, CloseOutlined } from '@ant-design/icons';
import type { TodoType } from '../../interface/Todo.interface';

const { Text } = Typography;

export const Todo = ({ title, description, completed }: TodoType): React.JSX.Element => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [editedTitle, setEditedTitle] = React.useState(title);
    const [editedDescription, setEditedDescription] = React.useState(description);

    const handleSave = (): void => {
        setIsEditing(false);
    };

    const handleCancel = (): void => {
        setEditedTitle(title);
        setEditedDescription(description);
        setIsEditing(false);
    };

    return (
        <div className={styles.todo}>
            <div className={styles.todo__content}>
                {isEditing ? (
                    <div className={styles.todo__edit}>
                        <Input
                            value={editedTitle}
                            onChange={(e): void => setEditedTitle(e.target.value)}
                            placeholder="Title"
                        />
                        <Input
                            value={editedDescription}
                            onChange={(e): void => setEditedDescription(e.target.value)}
                            placeholder="Description"
                        />
                    </div>
                ) : (
                    <div className={styles.todo__info}>
                        <Text strong className={styles.todo__title}>
                            {title}
                        </Text>
                        <Text className={styles.todo__description}>{description}</Text>
                        <Text
                            className={`${styles.todo__status} ${completed ? styles.todo__status_completed : ''}`}
                        >
                            {completed ? 'Completed' : 'In Progress'}
                        </Text>
                    </div>
                )}
            </div>
            <Space className={styles.todo__actions}>
                {isEditing ? (
                    <>
                        <Button type="primary" icon={<SaveOutlined />} onClick={handleSave}>
                            Save
                        </Button>
                        <Button icon={<CloseOutlined />} onClick={handleCancel}>
                            Cancel
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            type="text"
                            icon={<EditOutlined />}
                            onClick={(): void => setIsEditing(true)}
                        >
                            Edit
                        </Button>
                        <Button type="text" danger icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </>
                )}
            </Space>
        </div>
    );
};

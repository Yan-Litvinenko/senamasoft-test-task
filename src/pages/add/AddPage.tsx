import React from 'react';
import styles from './AddPage.module.scss';
import { Button, Input, Typography } from 'antd';
import { useAddTodo } from '../../hooks/useAddTodo';
import type { AddTodoFormType } from '../../interface/Todo.interface';

const { Title } = Typography;

export const AddPage = (): React.JSX.Element => {
    const { onFinish, form, Form } = useAddTodo();

    return (
        <div className={styles.add_page}>
            <div className={styles.add_page__inner}>
                <Typography>
                    <Title className={styles.add_page__title} level={1}>
                        Add todo
                    </Title>
                </Typography>
                <Form
                    form={form}
                    name="basic"
                    layout="vertical"
                    className={styles.add_page__form}
                    onFinish={onFinish}
                    autoComplete="off"
                    validateTrigger={['onSubmit']}
                >
                    <Form.Item<AddTodoFormType>
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please provide a title!' }]}
                    >
                        <Input placeholder="Enter todo title" />
                    </Form.Item>

                    <Form.Item<AddTodoFormType>
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please provide a description!' }]}
                    >
                        <Input placeholder="Enter todo description" />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className={styles.add_page__button}
                        >
                            Add todo
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

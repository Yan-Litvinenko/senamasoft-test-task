import React from 'react';
import { Button, Input } from 'antd';
import { useAddTodo } from '../../hooks/useAddTodo';
import type { AddTodoFormType } from '../../interface/Todo.interface';

export const AddTodoForm = (): React.JSX.Element => {
    const { onFinish, form, contextHolder, Form } = useAddTodo();
    return (
        <>
            {contextHolder}
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600, width: '100%' }}
                onFinish={onFinish}
                autoComplete="off"
                validateTrigger={['onSubmit']}
            >
                <Form.Item<AddTodoFormType>
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please provide a title!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<AddTodoFormType>
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please provide a description!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Create todo
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

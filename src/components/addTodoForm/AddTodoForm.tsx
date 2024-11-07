import React from 'react';
import { Button, Form, Input, message } from 'antd';
import type { FormProps } from 'antd';
import type { AddTodoFormType } from '../../interface/Todo.interface';
import { createTodo } from '../../helpers/createTodo';

export const AddTodoForm = (): React.JSX.Element => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish: FormProps<AddTodoFormType>['onFinish'] = async (values) => {
        try {
            await createTodo({ ...values, completed: false });
            messageApi.success('Todo created successfully!');
            form.resetFields();
        } catch (error) {
            messageApi.error('Failed to create todo!');
            console.error('Error creating todo:', error);
        }
    };

    return (
        <>
            {contextHolder}
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
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

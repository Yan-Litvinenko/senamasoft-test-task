import { message } from 'antd';
import type { UseMessage } from '../interface/Hooks.interface';

export const useMessage: UseMessage = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const showSuccess = (content: string): void => {
        messageApi.success(content);
    };

    const showError = (content: string): void => {
        messageApi.error(content);
    };

    return { showSuccess, showError, contextHolder };
};

import React from 'react';
import { useMessage } from '../hooks/useMessage';
import type { MessageFunction } from '../interface/Hooks.interface';

interface MessageContextType {
    showSuccess: MessageFunction;
    showError: MessageFunction;
}

const MessageContext = React.createContext<MessageContextType | undefined>(undefined);

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { showSuccess, showError, contextHolder } = useMessage();

    return (
        <MessageContext.Provider
            value={React.useMemo(() => ({ showSuccess, showError }), [showSuccess, showError])}
        >
            {contextHolder}
            {children}
        </MessageContext.Provider>
    );
};

export const useMessageContext = (): MessageContextType => {
    const context = React.useContext(MessageContext);

    if (!context) {
        throw new Error('useMessageContext must be used within MessageProvider');
    }

    return context;
};

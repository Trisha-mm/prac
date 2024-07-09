import React, { createContext, useReducer, ReactNode } from 'react';
import { ChatBotReducer, InitialChatBotState } from '@/src/reducers/chatbot-reducer';

const ChatBotContext = createContext({
  state: InitialChatBotState,
  dispatch: () => null,
});

export default ChatBotContext;

export function ChatBotProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(ChatBotReducer, InitialChatBotState);

  return (
    <ChatBotContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatBotContext.Provider>
  );
}

import React from 'react'
import ChatBot from '@/app/(tabs)/index'
import { ChatBotProvider } from '@/src/providers/chatbot-provider'

export default function App () {
    return (
        <ChatBotProvider>
            <ChatBot />
        </ChatBotProvider>
    )
}

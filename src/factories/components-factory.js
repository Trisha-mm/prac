import React from 'react'
import View from 'react-native-web/dist/exports/View'
import { RenderItems } from '@/src/tools/constants'
import ChatBubble from '@/src/components/chat-bubble'
import UserBubble from '@/src/components/user-bubble'

function ComponentsFactory (type) {
    switch (type) {
    case RenderItems.CHAT_BUBBLE:
        return <ChatBubble />
    case RenderItems.USER_BUBBLE:
        return <UserBubble />
    case RenderItems.BUTTON:
    default:
        return <View />
    }
}

export { ComponentsFactory }

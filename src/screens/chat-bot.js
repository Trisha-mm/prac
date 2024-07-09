import React, { useEffect, useState, Fragment, useContext } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BubblesFactory from '~/components/bubbles-factory'
import data from '~/assets/json/chat-bot.json'
import ChatBotContext from '~/providers/chatbot-provider'
import { ComponentsFactory } from '~/factories/components-factory'
import { RenderItems } from '~/tools/constants'



const ChatBot = () => {
    const { state, dispatch } = useContext(ChatBotContext);
    const [components, setComponents] = useState([]);
  
    useEffect(() => {
      if (data) {
        setComponents([
          <BubblesFactory
            key="bubblesFactory"
            data={data.chatBot[state.currentAction]}
            bubble={ComponentsFactory(state.renderItem)}
            interval={state.renderItem === RenderItems.CHAT_BUBBLE ? 3000 : 1500}
            callback={() => {
              state.nextAction && dispatch({ type: state.nextAction });
            }}
          />
        ]);
      }
    }, [state]); // Depend on state changes
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {components.map((component, index) => (
            <Fragment key={index}>{component}</Fragment>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  
  export default ChatBot;
import { Text, Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from "react-router-dom";
import React, { useEffect, useState, Fragment, useContext } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BubblesFactory from '@/src/components/bubbles-factory'
import data from '@/assets/json/chat-bot.json'
import ChatBotContext from '@/src/providers/chatbot-provider'
import { ComponentsFactory } from '@/src/factories/components-factory'
import { RenderItems } from '@/src/tools/constants'




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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});

export default ChatBot;

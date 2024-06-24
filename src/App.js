// src/App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactListScreen from './ContactListScreen'; // Adjust the path as per your project structure
import ChatScreen from './ChatScreen'; // Adjust the path as per your project structure
import { ChatProvider } from './StreamChatConfig'; // Adjust the path as per your project structure
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
  <ChatProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen name="ContactList" component={ContactListScreen} options={{headerShown:false}} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  </ChatProvider>
  </GestureHandlerRootView>
);

export default App;

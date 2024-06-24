
import React from 'react';
import { Chat, OverlayProvider } from 'stream-chat-react-native'; // Import OverlayProvider from stream-chat-react-native
import { StreamChat } from 'stream-chat';

const apiKey = 'u34fapt32dkf7sskyub6f5ajvbu3crk5hb9hgext7e7wxfd32f5sjbyhdr47ufdq'; // Replace with your Stream Chat API key
const client = new StreamChat(apiKey);

export const chatClient = client;

export const ChatProvider = ({ children }) => (
  <OverlayProvider>
    <Chat client={client}>
      {children}
    </Chat>
  </OverlayProvider>
);


//u34fapt32dkf7sskyub6f5ajvbu3crk5hb9hgext7e7wxfd32f5sjbyhdr47ufdq

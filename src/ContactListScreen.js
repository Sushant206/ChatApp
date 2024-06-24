

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const contacts = [
  { id: 1, name: 'General' },
  { id: 2, name: 'John Doe' },
  { id: 3, name: 'Jane Smith' },
  // Add more contacts as needed
];

const ContactListScreen = () => {
  const navigation = useNavigation();

  const navigateToChat = (channelName) => {
    navigation.navigate('Chat', { channelName });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Contact</Text>
      {contacts.map((contact) => (
        <TouchableOpacity
          key={contact.id}
          style={styles.contactItem}
          onPress={() => navigateToChat(contact.name)}
        >
          <Text style={styles.contactName}>{contact.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A085FA', // White background color
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  contactName: {
    fontSize: 18,
  },
});

export default ContactListScreen;

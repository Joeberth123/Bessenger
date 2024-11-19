// MessagesHomeScreen.js
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';

const sampleMessages = [
  { id: '1', sender: 'Alice', message: 'Hey, how are you?' },
  { id: '2', sender: 'Bob', message: 'Let’s catch up soon!' },
  { id: '3', sender: 'Charlie', message: 'Do you want to grab lunch?' },
];

const MessagesHomeScreen = ({ navigation }) => {
  const renderMessageItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.messageContainer} 
      onPress={() => navigation.navigate('ChatScreen', { userName: item.sender })}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      {sampleMessages.length === 0 ? (
        <Text style={styles.placeholderText}>You have no messages yet.</Text>
      ) : (
        <FlatList
          data={sampleMessages}
          renderItem={renderMessageItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messageList}
        />
      )}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewMessage')}>
        <Text style={styles.buttonText}>Start a New Conversation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align to top
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#EAEFF2', // Light blue background color
    paddingTop: 40, // Space from top
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36, // Increased title font size
    fontWeight: 'bold', // Bold title
    color: '#2C3E50', // Dark color for the title
    marginBottom: 20, // Space below the title
    textAlign: 'center', // Center align title
  },
  placeholderText: {
    fontSize: 18, // Placeholder text font size
    color: '#34495E', // Dark color for placeholder text
    textAlign: 'center', // Center align text
    marginTop: 20,
  },
  messageList: {
    width: '100%',
    paddingVertical: 10,
  },
  messageContainer: {
    backgroundColor: '#ffffff', // White background for each message item
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
  },
  sender: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  message: {
    color: '#34495E',
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3498db', // Blue background for button
    borderRadius: 20,
    alignItems: 'center', // Center button text
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16, // Slightly larger button text
  },
});

export default MessagesHomeScreen;

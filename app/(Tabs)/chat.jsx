// Home.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

const HomeScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const sendMessage = () => {
    if (inputText.trim()) {
      // Add user message
      const userMessage = { id: Date.now().toString(), text: inputText, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      setInputText(''); // Clear the input after sending

      // Simulate a bot response with a delay
      setIsLoading(true); // Show loading
      setTimeout(() => {
        const botResponse = generateBotResponse(inputText);
        setMessages((prevMessages) => [...prevMessages, botResponse]);
        setIsLoading(false); // Hide loading after response
      }, 1000); // 1-second delay for bot response
    }
  };

  // Simple bot response logic
  const generateBotResponse = (input) => {
    return { id: Date.now().toString(), text: 'Hello!', sender: 'bot' };
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userMessage : styles.botMessage,
      ]}
    >
      <Text style={[
        styles.messageText,
        item.sender === 'user' ? styles.userMessageText : styles.botMessageText,
      ]}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
      />
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#3498db" />
        </View>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
  },
  messageList: {
    padding: 10,
  },
  messageContainer: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  userMessage: {
    backgroundColor: '#3498db', // Color for user messages
    alignSelf: 'flex-end', // Align user messages to the right
  },
  botMessage: {
    backgroundColor: '#ffffff', // Color for bot messages
    alignSelf: 'flex-start', // Align bot messages to the left
  },
  messageText: {
    fontSize: 16,
  },
  userMessageText: {
    color: '#fff', // Text color for user messages
  },
  botMessageText: {
    color: '#333', // Text color for bot messages
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loadingContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default HomeScreen;

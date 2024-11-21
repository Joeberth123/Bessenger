import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const BookCard = ({ title, author, imageUrl, onCardPress, url }) => {
  return (
    <View className ="items-center">
    <TouchableOpacity style={styles.card} onPress={onCardPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.author} numberOfLines={1}>{author}</Text>
      </View>
      <Icon name="bookmark-outline" type="ionicon" style={styles.bookmarkIcon} />
      <ShareButton title={title} url={url} />
    </TouchableOpacity>
    </View>
  );
};

export default BookCard;

const styles = {
  






}
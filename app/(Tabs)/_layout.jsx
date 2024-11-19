import { Image, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 24, height: 24, tintColor: color }} // Use inline styles for width/height/tintColor
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) =>
          <TabIcon
          icon={icons.home}
          color={color} />,
        }}
      />
      <Tabs.Screen
    name="chat"
    options={{
      title: 'Chat',
      headerShown: false,
      tabBarIcon: ({ color, focused }) => (
        <TabIcon
          icon={icons.chat}
          color={color}
          name="chat"
          focused={focused}
        />
      ),
    }}
  />
      <Tabs.Screen
        name="share"
        options={{
          title: 'Share',
          headerShown: false,
          tabBarIcon: ({ color }) =>
          <TabIcon
          icon={icons.share}
          color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
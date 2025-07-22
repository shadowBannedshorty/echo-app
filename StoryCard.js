import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export default function StoryCard({ story }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{story.name}</Text>
      <Video
        source={{ uri: story.videoUrl }}
        useNativeControls
        resizeMode="contain"
        style={{ height: 200 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 20 },
  title: { fontWeight: 'bold', marginBottom: 8 },
});
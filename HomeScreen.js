import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../firebase';
import StoryCard from '../components/StoryCard';

export default function HomeScreen() {
  const [stories, setStories] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    async function fetchStories() {
      try {
        const snapshot = await getDocs(collection(db, 'stories'));
        const storyList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStories(storyList);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    }
    fetchStories();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <StoryCard story={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
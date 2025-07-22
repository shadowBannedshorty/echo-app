import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firebase';

export default function UploadScreen() {
  const [name, setName] = useState('');
  const [video, setVideo] = useState(null);
  const storage = getStorage(app);
  const db = getFirestore(app);

  async function pickVideo() {
    const result = await DocumentPicker.getDocumentAsync({ type: 'video/*' });
    if (!result.canceled && result.assets.length > 0) {
      setVideo(result.assets[0]);
    }
  }

  async function uploadStory() {
    if (!name || !video) {
      Alert.alert('Missing info', 'Please provide a name and video.');
      return;
    }

    try {
      const videoBlob = await fetch(video.uri).then(res => res.blob());
      const storageRef = ref(storage, `videos/${video.name}`);
      await uploadBytes(storageRef, videoBlob);
      const downloadURL = await getDownloadURL(storageRef);

      await addDoc(collection(db, 'stories'), {
        name,
        videoUrl: downloadURL,
      });

      Alert.alert('Success', 'Story uploaded!');
      setName('');
      setVideo(null);
    } catch (err) {
      console.error("Upload error:", err);
      Alert.alert("Upload failed", err.message);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Story Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="Pick a Video" onPress={pickVideo} />
      <Button title="Upload Story" onPress={uploadStory} disabled={!video} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { marginBottom: 10, borderBottomWidth: 1, padding: 8 },
});
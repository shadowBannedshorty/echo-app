import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="upload" options={{ title: 'Upload' }} />
      <Tabs.Screen name="voicejournal" options={{ title: 'Voice Journal' }} />
      <Tabs.Screen name="storyboard" options={{ title: 'Storyboard' }} />
    </Tabs>
  );
}
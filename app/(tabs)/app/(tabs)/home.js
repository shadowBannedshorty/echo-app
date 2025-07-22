import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        Welcome to ECHO 🎞️
      </Text>
      <Text style={{ fontSize: 16, color: 'gray', marginTop: 8 }}>
        Record. Upload. Reflect.
      </Text>
    </View>
  );
}
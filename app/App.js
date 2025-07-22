import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export function App() {
  const [ctx] = useState(() => require.context('./app'));

  return (
    <SafeAreaProvider>
      <ExpoRoot context={ctx} />
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
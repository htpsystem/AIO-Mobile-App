import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* 👇 Add login + register screens */}
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />

        {/* 👇 Your old tab navigation */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Already existing modal screen */}
        <Stack.Screen 
          name="modal" 
          options={{ presentation: 'modal', title: 'Modal' }} 
        />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

// C:\Users\martut\saglik-takip-app\app\_layout.tsx
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Stack initialRouteName="login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" options={{ title: "E-Devlet Giriş" }} />
      <Stack.Screen name="biten-raporlu-ilaclar" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

// C:\Users\martut\saglik-takip-app\app\(tabs)\_layout.tsx
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#004FC6",
        tabBarInactiveTintColor: "#666666",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 60,
          paddingBottom: 8,
          borderTopColor: "#D6E4FC",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Ana Sayfa",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="prescriptions"
        options={{
          title: "Reçetelerim",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pill" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: "Raporlarım",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: "Ödemelerim",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="wallet-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profilim",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

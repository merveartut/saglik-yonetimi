// C:\Users\martut\saglik-takip-app\app\(tabs)\_layout.tsx
import { Tabs } from "expo-router";
import { Platform } from "react-native";

// SVG'leri doğrudan React bileşeni olarak import ediyoruz
import AnasayfaIcon from "@/assets/images/home-page/anasayfa-bos.svg";
import IlaclarimIcon from "@/assets/images/ilaclar-page/ilaclarim.svg";
import OdemelerimIcon from "@/assets/images/odemeler-page/odemelerim-alt.svg";
import ProfilimIcon from "@/assets/images/profil-page/profilim.svg";
import RaporlarimIcon from "@/assets/images/raporlar-page/raporlarım-alt.svg";
import RecetelerimIcon from "@/assets/images/receteler-page/recetelerim.svg";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#004FC6",
        tabBarInactiveTintColor: "#666666",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 80,
          borderTopWidth: 1,
          borderTopColor: "#D6E4FC",
          paddingBottom: Platform.OS === "ios" ? 6 : 4,
          paddingTop: 6,
          elevation: 5,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: -2 },
        },
        tabBarItemStyle: {
          flex: 1, // Tüm butonların ekrana eşit ve dengeli dağılmasını sağlar
          paddingHorizontal: 0,
        },
        tabBarLabelStyle: {
          fontSize: 8, // 6 sekmenin rahatça sığması için optimize edilmiş boyut
          fontWeight: "600",
          textAlign: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Ana Sayfa",
          tabBarIcon: ({ size }) => <AnasayfaIcon width={size} height={size} />,
        }}
      />
      <Tabs.Screen
        name="recetelerim"
        options={{
          title: "Reçetelerim",
          tabBarIcon: ({ size }) => (
            <RecetelerimIcon width={size} height={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="raporlarim"
        options={{
          title: "Raporlarım",
          tabBarIcon: ({ size }) => (
            <RaporlarimIcon width={size} height={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="odemelerim"
        options={{
          title: "Ödemelerim",
          tabBarIcon: ({ size }) => (
            <OdemelerimIcon width={size} height={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="ilaclarim"
        options={{
          title: "İlaçlarım",
          tabBarIcon: ({ size }) => (
            <IlaclarimIcon width={size} height={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profilim"
        options={{
          title: "Profilim",
          tabBarIcon: ({ size }) => <ProfilimIcon width={size} height={size} />,
        }}
      />
      <Tabs.Screen
        name="biten-raporlu-ilaclar"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="raporlu-ilac-temin"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="ilac-geri-bildirim"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="saglik-kurulusu-basvurulari"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="kontrol-gereken-islem"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="tibbi-cihazlar"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="bilgilendirme-iceriklerim"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="hesaplama-araclari"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="sgkya-sor"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="guvenli-kimlik-dogrulama"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}

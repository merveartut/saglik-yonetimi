// C:\Users\martut\saglik-takip-app\src\features\dashboard\screens\HomeScreen.tsx
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface HomeScreenProps {
  navigation?: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const menuItems = [
    {
      title: "PROFİLİM",
      desc: "Kişisel bilgilerinizi görüntüleyin ve güncelleyin.",
      icon: "account-outline",
      lib: MaterialCommunityIcons,
    },
    {
      title: "ÖDEMELERİM",
      desc: "Katılım payı, ilaç katkı payı ve diğer ödemelerinizi görüntüleyin.",
      icon: "wallet-outline",
      lib: Ionicons,
    },
    {
      title: "SAĞLIK KURULUŞU BAŞVURULARIM",
      desc: "Sağlık kuruluşlarına yaptığınız başvuruları görüntüleyin.",
      icon: "hospital-building",
      lib: MaterialCommunityIcons,
    },
    {
      title: "RAPORLARIM",
      desc: "Raporlarınızı, sürelerini ve geçerlilik durumlarını görüntüleyin.",
      icon: "file-document-outline",
      lib: MaterialCommunityIcons,
    },
    {
      title: "İLAÇLARIM",
      desc: "Kullandığınız ilaçlara ve reçete geçmişinize ulaşın.",
      icon: "pill",
      lib: MaterialCommunityIcons,
    },
    {
      title: "TIBBİ CİHAZLARIM",
      desc: "Tıbbi cihazlarınızı ve malzeme kullanımlarınızı görüntüleyin.",
      icon: "medical-bag",
      lib: MaterialCommunityIcons,
    },
    {
      title: "BİLGİLENDİRME İÇERİKLERİM",
      desc: "Size özel bilgilendirme ve faydalı içeriklere ulaşın.",
      icon: "information-outline",
      lib: MaterialCommunityIcons,
    },
    {
      title: "HAKLARIM VE HESAPLAMA ARAÇLARI",
      desc: "Haklarınızı öğrenin ve hesaplama araçlarından yararlanın.",
      icon: "calculator-variant-outline",
      lib: MaterialCommunityIcons,
    },
    {
      title: "SGK'YA SOR",
      desc: "Merak ettiklerinizi sorun, bize iletin.",
      icon: "chat-question-outline",
      lib: MaterialCommunityIcons,
    },
    {
      title: "Güvenli Kimlik Doğrulama",
      desc: "Oluşturacağınız QR kod ile sağlık kuruluşunda kimliğinizi doğrulayın.",
      icon: "qrcode-scan",
      lib: MaterialCommunityIcons,
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Üst Kavisli Desen Alanı (LoginScreen ile Birebir Konsept - Daha Az Görünür) */}
      <View style={styles.circlePatternContainer}>
        <View style={styles.topHeader}>
          <View style={styles.logoWrapper}>
            <Text style={styles.headerLogo}>SGK</Text>
            <Text style={styles.headerSubLogo}>SOSYAL GÜVENLİK KURUMU</Text>
          </View>
        </View>
      </View>

      {/* Kullanıcı Karşılama Kartı (Sol: Metinler, Sağ: family.png Görseli) */}
      <View style={styles.welcomeCard}>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeName}>Sn. Fatma YILMAZ</Text>
          <View style={styles.welcomeSubRow}>
            <Text style={styles.welcomeText}>Hoş geldiniz</Text>
            <Ionicons
              name="heart"
              size={14}
              color="#E63946"
              style={{ marginLeft: 4 }}
            />
          </View>
        </View>
        <View style={styles.welcomeImageContainer}>
          <Image
            source={require("@/assets/images/family.png")}
            style={styles.familyIllustration}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Menü Grid Listesi (2 Sütun) */}
      <View style={styles.gridContainer}>
        {menuItems.map((item, index) => {
          const IconComponent = item.lib;
          return (
            <TouchableOpacity
              key={index}
              style={styles.menuCard}
              activeOpacity={0.7}
            >
              <View style={styles.cardTopRow}>
                <View style={styles.iconCircle}>
                  <IconComponent
                    name={item.icon as any}
                    size={20}
                    color="#0055CC"
                  />
                </View>
                <Ionicons name="chevron-forward" size={16} color="#888" />
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc} numberOfLines={2}>
                {item.desc}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#E9F1FD",
    padding: 16,
    paddingTop: 0,
  },
  circlePatternContainer: {
    backgroundColor: "#F1F5FE",
    borderBottomLeftRadius: 220,
    borderBottomRightRadius: 220,
    borderColor: "#D8E3FA",
    borderWidth: 2,
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    overflow: "hidden",
    transform: [{ scaleX: 1.5 }],
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoWrapper: {
    alignItems: "center",
  },
  headerLogo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#003366",
  },
  headerSubLogo: {
    fontSize: 7,
    color: "#003366",
    letterSpacing: 1,
  },
  welcomeCard: {
    backgroundColor: "#fffff000",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  welcomeTextContainer: {
    flex: 1,
  },
  welcomeName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 4,
  },
  welcomeSubRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 13,
    color: "#555",
  },
  welcomeImageContainer: {
    width: 280,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
  },
  familyIllustration: {
    width: "100%",
    height: "100%",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    padding: 8,
  },
  menuCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#D6E4FC",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  cardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#EBF3FE",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 10,
    color: "#666",
    lineHeight: 14,
  },
});

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// SVG'leri bileşen olarak import ediyoruz
import RaporlarimIllustration from "@/assets/images/raporlar-page/raporlarim.svg";
import SgkLogo from "@/assets/images/sgk.png";

interface RaporlarimScreenProps {
  onBack?: () => void;
}

export const RaporlarimScreen: React.FC<RaporlarimScreenProps> = ({
  onBack,
}) => {
  const router = useRouter();
  const reportCategories = [
    {
      title: "İLAÇ RAPORLARIM",
      desc: "İlaç kullanımına ilişkin raporlarınızı görüntüleyin.",
      icon: "file-document-outline",
      onPress: () => router.push("/(tabs)/biten-raporlu-ilaclar" as any),
    },
    {
      title: "BESLENME ÜRÜNLERİ RAPORLARIM",
      desc: "Tıbbi beslenme ürünlerine ilişkin raporlarınızı görüntüleyin.",
      icon: "medical-bag",
    },
    {
      title: "TIBBİ MALZEME/CİHAZ RAPORLARIM",
      desc: "Tıbbi malzeme ve cihaz kullanımına ilişkin raporlarınızı görüntüleyin.",
      icon: "file-certificate-outline",
    },
  ];

  const handleNavigateKontrolPage = () => {
    router.push("/(tabs)/kontrol-gereken-islem" as any);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* 1. Üst Header Alanı */}
      <View style={styles.topHeader}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Ionicons name="chevron-back" size={20} color="#003366" />
          <Text style={styles.backText}>Geri</Text>
        </TouchableOpacity>

        <View style={styles.logoWrapper}>
          <Image source={SgkLogo} style={styles.sgkLogo} resizeMode="contain" />
        </View>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={24} color="#003366" />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>4</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* 2. Banner Alanı */}
      <View style={styles.heroBanner}>
        <View style={styles.heroTextContainer}>
          <View style={styles.titleRow}>
            <View style={styles.titleIconCircle}>
              <MaterialCommunityIcons
                name="file-document-outline"
                size={22}
                color="#004FC6"
              />
            </View>
            <View style={styles.titleBox}>
              <Text style={styles.mainTitle}>RAPORLARIM</Text>
              <Text style={styles.subTitle}>
                Sağlık raporlarınıza ait bilgileri buradan
                görüntüleyebilirsiniz.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.heroImageContainer}>
          <RaporlarimIllustration style={styles.heroIllustration} />
        </View>
      </View>

      {/* 3. Kategori Kartları */}
      {reportCategories.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuCard}
          activeOpacity={0.7}
          onPress={item.onPress}
        >
          <View style={styles.cardRow}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons
                name={item.icon as any}
                size={22}
                color="#0055CC"
              />
            </View>

            <View style={styles.cardMiddleContainer}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc} numberOfLines={2}>
                {item.desc}
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={18} color="#888" />
          </View>
        </TouchableOpacity>
      ))}

      {/* 4. Uyarı Bandı */}
      <TouchableOpacity
        style={styles.alertBanner}
        activeOpacity={0.8}
        onPress={handleNavigateKontrolPage}
      >
        <View style={styles.alertIconContainer}>
          <Ionicons name="information-circle" size={22} color="#A03030" />
        </View>
        <View style={styles.alertTextContainer}>
          <Text style={styles.alertTitle}>
            Bir raporunuzun süresinin dolmasına 37 gün kaldı.
          </Text>
          <Text style={styles.alertDesc}>
            Raporlarım sayfasından detayları inceleyebilirsiniz.
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#A03030" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F8F9FB",
    padding: 16,
    paddingTop: 50,
    paddingBottom: 30,
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
    paddingHorizontal: 4,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 15,
    color: "#003366",
    fontWeight: "600",
  },
  iconButton: {
    position: "relative",
    padding: 4,
  },
  sgkLogo: {
    width: 100,
    height: 35,
  },
  logoWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  badgeContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#004FC6",
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 3,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "bold",
  },
  heroBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  heroTextContainer: {
    flex: 1,
    paddingRight: 8,
  },
  titleBox: {
    flexDirection: "column",
    flex: 1,
    gap: 8,
    alignItems: "flex-start",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  titleIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#E4EFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003366",
  },
  subTitle: {
    fontSize: 12,
    color: "#49526F",
    fontWeight: "bold",
    lineHeight: 17,
  },
  heroImageContainer: {
    width: 180,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  heroIllustration: {
    width: "100%",
    height: "100%",
  },
  menuCard: {
    backgroundColor: "#EDF2F6",
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
    justifyContent: "center",
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#EBF3FE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    flexShrink: 0,
  },
  cardMiddleContainer: {
    flex: 1,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 3,
  },
  cardDesc: {
    fontSize: 10.5,
    color: "#666",
    lineHeight: 14,
  },
  alertBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FCE8E6",
    borderWidth: 1,
    borderColor: "#F5C6C2",
    borderRadius: 14,
    padding: 14,
    marginTop: 4,
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 1,
  },
  alertIconContainer: {
    marginRight: 10,
  },
  alertTextContainer: {
    flex: 1,
    marginRight: 6,
  },
  alertTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#8A2828",
    marginBottom: 2,
  },
  alertDesc: {
    fontSize: 10.5,
    color: "#666",
  },
});

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
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

// SVG'leri doğrudan React bileşeni olarak import ediyoruz
import CircularPattern from "@/assets/images/circular-pattern.svg";
import BilgilendirmeIcon from "@/assets/images/home-page/bilgilendirme-iceriklerim.svg";
import GuvenliKimlikIcon from "@/assets/images/home-page/guvenli-kimilik-dogrulama.svg";
import HesaplamaIcon from "@/assets/images/home-page/haklarım-ve-hesaplama.svg";
import OdemelerimIcon from "@/assets/images/home-page/odemelerim.svg";
import ProfilIcon from "@/assets/images/home-page/profilim.svg";
import RaporlarimIcon from "@/assets/images/home-page/raporlarim.svg";
import SaglikBasvuruIcon from "@/assets/images/home-page/saglık-kurulusu-basvurularım.svg";
import SgkyaSorIcon from "@/assets/images/home-page/sgkya-sor.svg";
import TibbiCihazlarIcon from "@/assets/images/home-page/tıbbı-cihazlarım.svg";
import IlaclarimIcon from "@/assets/images/ilaclar-page/ilaclarim.svg";

interface HomeScreenProps {
  navigation?: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const router = useRouter();

  const menuItems = [
    {
      title: "PROFİLİM",
      desc: "Kişisel bilgilerinizi görüntüleyin ve güncelleyin.",
      IconComponent: ProfilIcon,
      onPress: () => router.push("/(tabs)/profilim" as any),
    },
    {
      title: "ÖDEMELERİM",
      desc: "Katılım payı, ilaç katkı payı ve diğer ödemelerinizi görüntüleyin.",
      IconComponent: OdemelerimIcon,
      onPress: () => router.push("/(tabs)/odemelerim" as any),
    },
    {
      title: "SAĞLIK KURULUŞU BAŞVURULARIM",
      desc: "Sağlık kuruluşlarına yaptığınız başvuruları görüntüleyin.",
      IconComponent: SaglikBasvuruIcon,
      onPress: () => router.push("/(tabs)/saglik-kurulusu-basvurulari" as any),
    },
    {
      title: "RAPORLARIM",
      desc: "Raporlarınızı, sürelerini ve geçerlilik durumlarını görüntüleyin.",
      IconComponent: RaporlarimIcon,
      onPress: () => router.push("/(tabs)/raporlarim" as any),
    },
    {
      title: "İLAÇLARIM",
      desc: "Kullandığınız ilaçlara ve reçete geçmişinize ulaşın.",
      IconComponent: IlaclarimIcon,
      onPress: () => router.push("/(tabs)/ilaclarim" as any),
    },
    {
      title: "TIBBİ CİHAZLARIM",
      desc: "Tıbbi cihazlarınızı ve malzeme kullanımlarınızı görüntüleyin.",
      IconComponent: TibbiCihazlarIcon,
      onPress: () => router.push("/(tabs)/tibbi-cihazlar" as any),
    },
    {
      title: "BİLGİLENDİRME İÇERİKLERİM",
      desc: "Size özel bilgilendirme ve faydalı içeriklere ulaşın.",
      IconComponent: BilgilendirmeIcon,
      onPress: () => router.push("/(tabs)/bilgilendirme-iceriklerim" as any),
    },
    {
      title: "HAKLARIM VE HESAPLAMA ARAÇLARI",
      desc: "Haklarınızı öğrenin ve hesaplama araçlarından yararlanın.",
      IconComponent: HesaplamaIcon,
      onPress: () => router.push("/(tabs)/hesaplama-araclari" as any),
    },
    {
      title: "SGK'YA SOR",
      desc: "Merak ettiklerinizi sorun, bize iletin.",
      IconComponent: SgkyaSorIcon,
      onPress: () => router.push("/(tabs)/sgkya-sor" as any),
    },
    {
      title: "Güvenli Kimlik Doğrulama",
      desc: "Oluşturacağınız QR kod ile sağlık kuruluşunda kimliğinizi doğrulayın.",
      IconComponent: GuvenliKimlikIcon,
      onPress: () => router.push("/(tabs)/guvenli-kimlik-dogrulama" as any),
    },
  ];

  return (
    <LinearGradient
      colors={["#DCEAF7", "#EAF2FA", "#F4F8FC"]}
      style={styles.gradientContainer}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Üst Kavisli Desen Alanı (SVG Bileşeni) */}
        <View style={styles.patternBackgroundContainer}>
          <CircularPattern
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          />
        </View>

        {/* 1. Üst Header Alanı (Geri Tuşu ve Logo) */}
        <View style={styles.topHeader}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => router.push("/login" as any)}
          >
            <Ionicons name="menu" size={20} color="#003366" />
          </TouchableOpacity>

          <View style={styles.logoWrapper}>
            <Image
              source={require("@/assets/images/sgk.png")}
              style={styles.sgkLogo}
              resizeMode="contain"
            />
          </View>

          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Ionicons name="notifications-outline" size={24} color="#003366" />
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>4</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Kullanıcı Karşılama Kartı */}
        <View style={styles.welcomeCard}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeName}>Sn. Merve ARTUT</Text>
            <View style={styles.welcomeSubRow}>
              <Text style={styles.welcomeText}>Hoş geldiniz</Text>
              <Ionicons
                name="heart-outline"
                size={18}
                color="#004FC6"
                style={{ marginLeft: 4 }}
              />
            </View>
          </View>
          <View style={styles.welcomeImageContainer}>
            <Image
              source={require("@/assets/images/ikinci-hero-image.png")}
              style={styles.heroIllustration}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Menü Grid Listesi (2 Sütun) */}
        <View style={styles.gridContainer}>
          {menuItems.map((item, index) => {
            const IconComponent = item.IconComponent;
            return (
              <TouchableOpacity
                key={index}
                style={styles.menuCard}
                activeOpacity={0.7}
                onPress={item.onPress}
              >
                <View style={styles.cardRow}>
                  <View style={styles.iconCircle}>
                    <IconComponent width={22} height={22} />
                  </View>

                  <View style={styles.cardMiddleContainer}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardDesc} numberOfLines={2}>
                      {item.desc}
                    </Text>
                  </View>

                  <Ionicons
                    name="chevron-forward"
                    size={16}
                    color="#888"
                    style={styles.arrowIcon}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 16,
    paddingTop: 50,
    paddingBottom: 40,
    position: "relative",
  },
  patternBackgroundContainer: {
    position: "absolute",
    top: -90,
    left: -16,
    right: -16,
    height: 200,
    zIndex: -1,
    overflow: "hidden",
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
    paddingHorizontal: 4,
  },
  logoWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  sgkLogo: {
    width: 100,
    height: 35,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    position: "relative",
    padding: 4,
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
  welcomeCard: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -30,
    zIndex: 10,
  },
  welcomeTextContainer: {
    flex: 1,
    paddingLeft: 4,
  },
  welcomeName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#353E76",
    marginBottom: 3,
  },
  welcomeSubRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 16,
    color: "#353E76",
  },
  welcomeImageContainer: {
    width: 160,
    height: 190,
    justifyContent: "center",
    alignItems: "center",
  },
  heroIllustration: {
    width: "100%",
    height: "100%",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 8,
    marginTop: -20,
  },
  menuCard: {
    width: "49%",
    height: "auto",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ebeff5",
    shadowColor: "#a3a3a3",
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
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#EBF3FE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    flexShrink: 0,
  },
  cardMiddleContainer: {
    flex: 1,
    marginRight: 4,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 2,
  },
  cardDesc: {
    fontSize: 9,
    color: "#666",
    lineHeight: 12,
  },
  arrowIcon: {
    flexShrink: 0,
  },
});

import { Ionicons } from "@expo/vector-icons";
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
import DiyabetIcon from "@/assets/images/bilgilendirme/diyabet.svg";
import FizikselAktiviteIcon from "@/assets/images/bilgilendirme/fiziksel-aktivite.svg";
import ColyakIcon from "@/assets/images/bilgilendirme/gluten-kadın-icon.svg";
import RuhSagligiIcon from "@/assets/images/bilgilendirme/ruh-sagligi.svg";
import SaglikliBeslenmeIcon from "@/assets/images/bilgilendirme/saglıklı-beslenme.svg";
import HipertansiyonIcon from "@/assets/images/bilgilendirme/sebzeler.svg";
import CircularPattern from "@/assets/images/circular-pattern.svg";
import SgkLogo from "@/assets/images/sgk.png";

interface BilgilendirmeIceriklerimScreenProps {
  onBack?: () => void;
  onSelectCategory?: (category: string) => void;
}

export const BilgilendirmeIceriklerimScreen: React.FC<
  BilgilendirmeIceriklerimScreenProps
> = ({ onBack, onSelectCategory }) => {
  const contentCategories = [
    {
      id: "colyak",
      title: "Çölyak Hastalığı",
      desc: "Belirtilerini Öğren\nSağlığını Koru",
      bgColor: "#FDF2EE",
      titleColor: "#9A3412",
      borderColor: "#F8D7CD",
      ImageComponent: ColyakIcon,
    },
    {
      id: "hipertansiyon",
      title: "Hipertansiyon",
      desc: "Daha Sağlıklı Bir Yaşam için\nKüçük Değişiklikler",
      bgColor: "#F0FDF4",
      titleColor: "#166534",
      borderColor: "#DCFCE7",
      ImageComponent: HipertansiyonIcon,
    },
    {
      id: "diyabet",
      title: "Diyabet",
      desc: "Kontrol Sizin\nElinizde",
      bgColor: "#F0F9FF",
      titleColor: "#0369A1",
      borderColor: "#E0F2FE",
      ImageComponent: DiyabetIcon,
    },
    {
      id: "saglikli-beslenme",
      title: "Sağlıklı Beslenme",
      desc: "Daha İyi bir Yaşam için\nDoğru Seçimler",
      bgColor: "#FDF8F0",
      titleColor: "#9A6512",
      borderColor: "#FEEBC8",
      ImageComponent: SaglikliBeslenmeIcon,
    },
    {
      id: "fiziksel-aktivite",
      title: "Fiziksel Aktivite",
      desc: "Hareket Hayat Katar",
      bgColor: "#F3E8FF",
      titleColor: "#6B21A8",
      borderColor: "#E9D5FF",
      ImageComponent: FizikselAktiviteIcon,
    },
    {
      id: "ruh-sagligi",
      title: "Ruh Sağlığı",
      desc: "Kendinize İyi Bakın",
      bgColor: "#F0FDFA",
      titleColor: "#115E59",
      borderColor: "#CCFBF1",
      ImageComponent: RuhSagligiIcon,
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Arka Plan Kavisli Desen */}
      <View style={styles.patternBackgroundContainer}>
        <CircularPattern
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        />
      </View>

      {/* 1. Üst Header Alanı */}
      <View style={styles.topHeader}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBack}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={20} color="#003366" />
        </TouchableOpacity>

        <View style={styles.logoWrapper}>
          <Image source={SgkLogo} style={styles.sgkLogo} resizeMode="contain" />
        </View>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Ionicons name="notifications-outline" size={24} color="#003366" />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>4</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* 2. Banner Alanı */}
      <View style={styles.heroBanner}>
        <View style={styles.heroTextContainer}>
          <Text style={styles.mainTitle}>Bilgilendirme İçeriklerim</Text>
          <Text style={styles.subTitle}>
            Bu ekranda, yaşınıza, varsa tanılarınıza ve genel sağlık durumunuza
            göre size özel hazırlanmış bilgilendirme içeriklerine
            ulaşabilirsiniz. Sağlığınız için faydalı bilgiler, rehberler ve
            öneriler burada.
          </Text>
        </View>
        <View style={styles.heroImageContainer}>
          <Ionicons name="document-text-outline" size={48} color="#004FC6" />
        </View>
      </View>

      {/* 3. İçerik Kartları Grid Alanı */}
      <View style={styles.gridContainer}>
        {contentCategories.map((item) => {
          const ImageComp = item.ImageComponent;
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.gridCard,
                {
                  backgroundColor: item.bgColor,
                  borderColor: item.borderColor,
                },
              ]}
              activeOpacity={0.8}
              onPress={() => onSelectCategory && onSelectCategory(item.id)}
            >
              {/* Arka plan sağ alt köşede SVG bileşeni */}
              <View style={styles.cardBackgroundWrapper}>
                <ImageComp width={80} height={80} />
              </View>

              <View style={styles.cardHeader}>
                <Text style={[styles.cardTitle, { color: item.titleColor }]}>
                  {item.title}
                </Text>
                <Text style={styles.cardDesc}>{item.desc}</Text>
              </View>
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
    backgroundColor: "#E7F1FB",
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
  backButton: {
    flexDirection: "row",
    alignItems: "center",
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
    marginBottom: 20,
    paddingHorizontal: 4,
    marginTop: 18,
  },
  heroTextContainer: {
    flex: 1.4,
    paddingRight: 10,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 10,
    color: "#49526F",
    lineHeight: 14,
  },
  heroImageContainer: {
    width: 75,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E4EFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D0E2FF",
    flexShrink: 0,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
    backgroundColor: "#ffffff",
    padding: 14,
    paddingVertical: 20,
    borderRadius: 12,
  },
  gridCard: {
    width: "48%",
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
    height: 140,
    justifyContent: "space-between",
    position: "relative",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 2,
  },
  cardBackgroundWrapper: {
    position: "absolute",
    bottom: -8,
    right: -8,
    opacity: 0.85,
  },
  cardHeader: {
    flex: 1,
    zIndex: 1,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: "900",
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 10,
    color: "#555",
    lineHeight: 13.5,
  },
});

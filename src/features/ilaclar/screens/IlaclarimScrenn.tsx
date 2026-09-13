import { Ionicons } from "@expo/vector-icons";
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
import CircularPattern from "@/assets/images/circular-pattern.svg";
import IkinciHeroImage from "@/assets/images/ikinci-hero-image.png";
import IBilgilendirmeIcon from "@/assets/images/ilaclar-page/i_bilgilendirme.svg";
import IlacGeriBildirimIcon from "@/assets/images/ilaclar-page/ilac_geri_bildirim.svg";
import IlacGeriBildirimAltButonIcon from "@/assets/images/ilaclar-page/ilac_geri_bildirim_alt_buton.svg";
import IlaclarimIcon from "@/assets/images/ilaclar-page/ilaclarim.svg";
import KirmiziUnlemIcon from "@/assets/images/ilaclar-page/kirmizi-unlem.svg";
import ReceteAltButonIcon from "@/assets/images/ilaclar-page/recete_alt_buton.svg";
import RecetelerimIcon from "@/assets/images/ilaclar-page/recetelerim.svg";
import YurtDisiIlacIcon from "@/assets/images/ilaclar-page/yut_disi_ilacim.svg";
import SgkLogo from "@/assets/images/sgk.png";

interface IlaclarimScreenProps {
  onBack?: () => void;
}

export const IlaclarimScreen: React.FC<IlaclarimScreenProps> = ({ onBack }) => {
  const router = useRouter();

  const medicineCards = [
    {
      title: "BİTEN İLAÇLARIM",
      desc: "Kullanmakta olduğunuz ilaçlardan rapor süresi dolan veya temin süresi sona erenleri görüntüleyebilirsiniz.",
      ImageComponent: IlaclarimIcon,
      badgeText: "2 ilacınız bitti",
      badgeColor: "#8A2828",
      badgeBg: "#FCE8E6",
      BadgeIconComponent: KirmiziUnlemIcon,
      onPress: () => router.push("/(tabs)/raporlu-ilac-temin" as any),
    },
    {
      title: "REÇETELERİM",
      desc: "Tüm reçetelerinizi ve eczaneden aldığınız ilaçları görüntüleyebilirsiniz.",
      ImageComponent: RecetelerimIcon,
      badgeText: "Son 6 ay: 8 reçete",
      badgeColor: "#003366",
      badgeBg: "#E4EFFF",
      BadgeIconComponent: ReceteAltButonIcon,
    },
    {
      title: "YURT DIŞI İLACIM",
      desc: "Yurt dışından temin edilmesine izin verilen ilaçlarınıza ilişkin bilgilere ulaşabilirsiniz.",
      ImageComponent: YurtDisiIlacIcon,
      badgeText: "1 yurt dışı ilaç kaydınız var",
      badgeColor: "#003366",
      badgeBg: "#E4EFFF",
      BadgeIconComponent: YurtDisiIlacIcon,
    },
    {
      title: "İLAÇ GERİ BİLDİRİMİ",
      desc: "Kullandığınız ilaçlara ilişkin görüş, öneri veya yaşadığınız sorunları bizimle paylaşabilirsiniz.",
      ImageComponent: IlacGeriBildirimIcon,
      badgeText: "Görüşlerinizi bizimle paylaşın",
      badgeColor: "#003366",
      badgeBg: "#E4EFFF",
      BadgeIconComponent: IlacGeriBildirimAltButonIcon,
      onPress: () => router.push("/(tabs)/ilac-geri-bildirim" as any),
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
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
          <Text style={styles.mainTitle}>İLAÇLARIM</Text>
          <Text style={styles.subTitle}>
            Kullandığınız, reçetelenen ve yurt dışından temin edilen
            ilaçlarınıza ilişkin bilgilere buradan ulaşabilirsiniz.
          </Text>
        </View>
        <View style={styles.heroImageContainer}>
          <Image
            source={IkinciHeroImage}
            style={styles.heroIllustration}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* 3. Kategori Kartları */}
      <View style={styles.gridContainer}>
        {medicineCards.map((item, index) => {
          const ImgComp = item.ImageComponent;
          const BadgeComp = item.BadgeIconComponent;
          return (
            <TouchableOpacity
              key={index}
              style={styles.menuCard}
              activeOpacity={0.7}
              onPress={item.onPress}
            >
              <View style={styles.cardTopRow}>
                <View style={styles.iconCircle}>
                  <ImgComp width={26} height={26} />
                </View>
                <Ionicons name="chevron-forward" size={16} color="#888" />
              </View>

              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc} numberOfLines={3}>
                {item.desc}
              </Text>

              <View
                style={[styles.cardBadge, { backgroundColor: item.badgeBg }]}
              >
                {BadgeComp && <BadgeComp width={14} height={14} />}
                <Text
                  style={[styles.cardBadgeText, { color: item.badgeColor }]}
                >
                  {item.badgeText}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* 4. Alt Bilgilendirme Kutusu */}
      <View style={styles.footerInfoBox}>
        <IBilgilendirmeIcon width={40} height={40} />
        <Text style={styles.footerInfoText}>
          İlaçlarınızla ilgili detaylı bilgi, eşdeğer ilaç seçenekleri, fiyat
          farkı bilgileri ve rapor dönemlerinizi bu bölümde
          görüntüleyebilirsiniz.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#EAF2FA",
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
  sgkLogo: {
    width: 100,
    height: 35,
  },
  logoWrapper: {
    alignItems: "center",
    justifyContent: "center",
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
  heroBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 32,
    paddingHorizontal: 4,
  },
  heroTextContainer: {
    flex: 1,
    paddingRight: 8,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 11.5,
    color: "#555555",
    lineHeight: 16,
    width: 240,
  },
  heroImageContainer: {
    width: 200,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -32,
  },
  heroIllustration: {
    width: "100%",
    height: "100%",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 4,
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
    width: 42,
    height: 42,
    borderRadius: 19,
    backgroundColor: "#EBF3FE",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 11.5,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 9.5,
    color: "#666",
    lineHeight: 13.5,
    marginBottom: 10,
  },
  cardBadge: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 6,
    paddingHorizontal: 4,
    paddingVertical: 5,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  cardBadgeText: {
    fontSize: 9.5,
    fontWeight: "600",
  },
  footerInfoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAF4FD",
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 2,
  },
  footerInfoText: {
    fontSize: 11,
    color: "#003366",
    flex: 1,
    lineHeight: 15,
  },
});

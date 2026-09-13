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
import CircularPatternWhite from "@/assets/images/circular-pattern-white.svg";
import GssHaklarimIcon from "@/assets/images/hesaplama-araclari/genel-saglik-sigorta-haklarim.svg";
import GeriOdemeIlacIcon from "@/assets/images/hesaplama-araclari/geri-odeme-kapsami-ilaclar.svg";
import GeriOdemeCihazIcon from "@/assets/images/hesaplama-araclari/geri-odeme-kapsami-tibbi-cihaz.svg";
import HeroImage from "@/assets/images/hesaplama-araclari/hero-image.svg";
import InfoIcon from "@/assets/images/hesaplama-araclari/info.svg";
import SgkAnlasmaliIcon from "@/assets/images/hesaplama-araclari/sgk-ile-anlasmali-kurulus.svg";
import SgkLogo from "@/assets/images/sgk.png";

interface HesaplamaAraclariScreenProps {
  onBack?: () => void;
  onSelectCategory?: (category: string) => void;
}

export const HesaplamaAraclariScreen: React.FC<
  HesaplamaAraclariScreenProps
> = ({ onBack, onSelectCategory }) => {
  const categories = [
    {
      id: "anlasmali-kuruluslar",
      title: "SGK ile Anlaşmalı Özel Sağlık Kuruluşları",
      desc: "İlinizdeki SGK ile anlaşmalı özel hastane, tıp merkezi ve diğer sağlık kuruluşlarını sorgulayın.",
      ImageComponent: SgkAnlasmaliIcon,
    },
    {
      id: "geri-odeme-ilaclar",
      title: "Geri Ödeme Kapsamındaki İlaçlar",
      desc: "SGK tarafından geri ödeme kapsamında yer alan ilaçları sorgulayın, rapor ve kullanım koşullarını öğrenin.",
      ImageComponent: GeriOdemeIlacIcon,
    },
    {
      id: "geri-odeme-cihazlar",
      title: "Geri Ödeme Kapsamındaki\nTıbbi Malzeme ve Cihazlar",
      desc: "SGK tarafından karşılanan tıbbi malzeme ve cihazları inceleyin, temin ve rapor koşullarını öğrenin.",
      ImageComponent: GeriOdemeCihazIcon,
    },
    {
      id: "gss-haklarim",
      title: "Genel Sağlık Sigortası Haklarım",
      desc: "Mevcut durumunuza göre GSS kapsamındaki haklarınızı öğrenin. Sık sorulan sorular ve örnek durumlar ile kapsamlı bilgiye ulaşın.",
      ImageComponent: GssHaklarimIcon,
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Arka Plan Beyaz Kavisli Desen */}
      <View style={styles.patternBackgroundContainer}>
        <CircularPatternWhite
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
          <Text style={styles.mainTitle}>
            Haklarım ve{"\n"}Hesaplama Araçları
          </Text>
          <Text style={styles.subTitle}>
            SGK kapsamındaki haklarınızı öğrenin, hesaplamalar yapın, size
            sunulan hizmetlerden kolayca yararlanın.
          </Text>
        </View>
        <View style={styles.heroImageContainer}>
          <HeroImage width={220} height={220} />
        </View>
      </View>

      {/* 3. Kategori Kartları */}
      {categories.map((item) => {
        const ImgComp = item.ImageComponent;
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.menuCard}
            activeOpacity={0.7}
            onPress={() => onSelectCategory && onSelectCategory(item.id)}
          >
            <View style={styles.cardRow}>
              <View style={styles.iconCircle}>
                <ImgComp width={50} height={50} />
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
        );
      })}

      {/* 4. Alt Bilgilendirme Bandı */}
      <View style={styles.infoBanner}>
        <View style={styles.infoIconCircle}>
          <InfoIcon width={52} height={52} />
        </View>
        <Text style={styles.infoBannerText}>
          Bu bölümde yer alan bilgiler mevzuat düzenlemelerine göre
          hazırlanmıştır. Kişisel durumunuza ilişkin kesin bilgi için SGK ile
          iletişime geçebilirsiniz.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5FAFE",
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
    marginTop: 12,
  },
  heroTextContainer: {
    flex: 0.8,
    paddingRight: 4,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 6,
    lineHeight: 22,
  },
  subTitle: {
    fontSize: 10,
    color: "#49526F",
    lineHeight: 14,
  },
  heroImageContainer: {
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 24,
    flexShrink: 1,
  },
  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: "center",
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 12,
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
    fontSize: 12.5,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 3,
  },
  cardDesc: {
    fontSize: 10,
    color: "#666",
    lineHeight: 13.5,
  },
  infoBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DFF1FB",
    borderRadius: 12,
    padding: 12,
    marginTop: 6,
    gap: 10,
    borderWidth: 1,
    borderColor: "#C5E4F8",
  },
  infoIconCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  infoBannerText: {
    flex: 1,
    fontSize: 10.5,
    color: "#18181b",
    lineHeight: 14.5,
  },
});

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
import SgkLogo from "@/assets/images/sgk.png";
import TibbiCihazlarimIllustration from "@/assets/images/tibbi-cihazlar/tibbi-cihazlarim.svg";

interface TibbiCihazlarimScreenProps {
  onBack?: () => void;
  onSelectCategory?: (category: string) => void;
}

export const TibbiCihazlarimScreen: React.FC<TibbiCihazlarimScreenProps> = ({
  onBack,
  onSelectCategory,
}) => {
  const deviceCategories = [
    {
      id: "implante",
      title: "Vücuda implante edilen cihazlarım",
      iconName: "ear-outline",
    },
    {
      id: "isitme",
      title: "İşitme cihazım",
      iconName: "ear-outline",
    },
    {
      id: "evde-bakim",
      title: "Evde bakım cihazlarım",
      iconName: "medkit-outline",
    },
    {
      id: "ortez-protez",
      title: "Ortez/Protez",
      iconName: "body-outline",
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
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
          <Text style={styles.mainTitle}>Tıbbi Cihazlarım</Text>
          <Text style={styles.subTitle}>
            Sahip olduğunuz tıbbi cihazları, marka, model ve MR uyumluluk
            durumlarını buradan görüntüleyebilirsiniz.
          </Text>
        </View>
        <View style={styles.heroImageContainer}>
          <TibbiCihazlarimIllustration width={120} height={120} />
        </View>
      </View>

      {/* 3. Cihaz Kategori Kartları */}
      <View
        style={{ backgroundColor: "#FFFFFF", padding: 12, borderRadius: 12 }}
      >
        {deviceCategories.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuCard}
            activeOpacity={0.7}
            onPress={() => onSelectCategory && onSelectCategory(item.id)}
          >
            <View style={styles.cardRow}>
              <View style={styles.iconCircle}>
                <Ionicons
                  name={item.iconName as any}
                  size={22}
                  color="#004FC6"
                />
              </View>

              <View style={styles.cardMiddleContainer}>
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>

              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>Detaylar için tıklayınız</Text>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color="#888"
                  style={{ marginLeft: 4 }}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* 4. Alt Bilgilendirme Bandı */}
      <View style={styles.infoBanner}>
        <View style={styles.infoIconCircle}>
          <Ionicons name="information" size={14} color="#FFF" />
        </View>
        <Text style={styles.infoBannerText}>
          Listede yer alan cihazlara ilişkin detaylarda marka, model, temin
          tarihi, MR uyumluluk durumu ve rapor bilgileri görüntülenebilir.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#E3EDF6",
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
    marginBottom: 16,
    paddingHorizontal: 4,
    backgroundColor: "#E3EDF6",
    zIndex: -10,
  },
  heroTextContainer: {
    flex: 1.4,
    paddingRight: 8,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 10.5,
    color: "#49526F",
    lineHeight: 14.5,
  },
  heroImageContainer: {
    flex: 0.9,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
  },
  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#d6e4fca3",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: "center",
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
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
    fontSize: 12,
    fontWeight: "bold",
    color: "#003366",
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    fontSize: 10,
    color: "#555",
  },
  infoBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECF1F7",
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
    backgroundColor: "#3C58A7",
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

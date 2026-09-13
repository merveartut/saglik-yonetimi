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
import HastaneIllustration from "@/assets/images/basvurular-page/Hastane.svg";
import TakvimIcon from "@/assets/images/basvurular-page/takvim.svg";
import CircularPattern from "@/assets/images/circular-pattern.svg";
import SgkLogo from "@/assets/images/sgk.png";

interface SaglikKurulusuBasvurularimScreenProps {
  onBack?: () => void;
  onSelectApplication?: (item: any) => void;
}

export const SaglikKurulusuBasvurularimScreen: React.FC<
  SaglikKurulusuBasvurularimScreenProps
> = ({ onBack, onSelectApplication }) => {
  const applications = [
    {
      id: 1,
      date: "24.08.2026",
      hospital: "Bestekar Aile Sağlığı Merkezi",
      department: "Aile Hekimi",
      hasWarning: false,
    },
    {
      id: 2,
      date: "15.08.2026",
      hospital: "Gazi Üniversitesi TF Hast.",
      department: "Kardiyoloji Polikliniği",
      hasWarning: false,
    },
    {
      id: 3,
      date: "02.08.2026",
      hospital: "Özel A.... Hastanesi",
      department: "İç Hastalıkları Polikliniği",
      hasWarning: true,
      warningText: "Kontrol etmeniz gereken bir işleminiz var",
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
          <Text style={styles.mainTitle}>SAĞLIK KURULUŞU BAŞVURULARIM</Text>
          <Text style={styles.subTitle}>
            Sağlık kuruluşlarına yaptığınız başvuruları ve işlem durumlarını
            görüntüleyebilirsiniz.
          </Text>
        </View>
        <View style={styles.heroImageContainer}>
          <HastaneIllustration width={300} height={250} />
        </View>
      </View>

      {/* 3. Başvuru Listesi Kartı */}
      <View style={styles.cardContainer}>
        {applications.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.itemRow,
              index === applications.length - 1 && { borderBottomWidth: 0 },
            ]}
            activeOpacity={0.7}
            onPress={() => onSelectApplication && onSelectApplication(item)}
          >
            <View style={styles.itemContentWrapper}>
              <View style={styles.itemMainLine}>
                <View style={styles.iconCircle}>
                  <TakvimIcon width={40} height={40} />
                </View>

                <View style={styles.dateCol}>
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>

                <View style={styles.hospitalCol}>
                  <Text style={styles.hospitalText} numberOfLines={1}>
                    {item.hospital}
                  </Text>
                </View>

                <View style={styles.departmentCol}>
                  <Text style={styles.departmentText} numberOfLines={1}>
                    {item.department}
                  </Text>
                </View>

                <Ionicons name="chevron-forward" size={16} color="#888" />
              </View>

              {item.hasWarning && (
                <Text style={styles.warningText}>{item.warningText}</Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
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
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  heroTextContainer: {
    flex: 1.4,
    paddingRight: 8,
    marginTop: 32,
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 6,
  },
  subTitle: {
    fontSize: 11,
    color: "#49526F",
    lineHeight: 15,
  },
  heroImageContainer: {
    flex: 1.1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -80,
    marginRight: -10,
  },
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    paddingHorizontal: 12,
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 2,
  },
  itemRow: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#EDF2F7",
  },
  itemContentWrapper: {
    width: "100%",
  },
  itemMainLine: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#EBF3FE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    flexShrink: 0,
  },
  dateCol: {
    width: 80,
    marginRight: 8,
  },
  dateText: {
    fontSize: 11.5,
    fontWeight: "bold",
    color: "#003366",
  },
  hospitalCol: {
    flex: 1.2,
    marginRight: 8,
  },
  hospitalText: {
    fontSize: 11.5,
    color: "#333",
    fontWeight: "500",
  },
  departmentCol: {
    flex: 1.1,
    marginRight: 8,
  },
  departmentText: {
    fontSize: 11,
    color: "#555",
  },
  warningText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#C53030",
    marginTop: 6,
    marginLeft: 42,
    textAlign: "right",
  },
});

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
import CircularPattern from "@/assets/images/circular-pattern.svg";
import FiltreIcon from "@/assets/images/odemeler-page/Filtre.svg";
import OdemelerimIllustration from "@/assets/images/odemeler-page/odemelerim.svg";
import OdenenIcon from "@/assets/images/odemeler-page/odenen.svg";
import TakvimIcon from "@/assets/images/odemeler-page/Takvim.svg";
import ToplamOdemeIcon from "@/assets/images/odemeler-page/toplam-odenen.svg";
import SgkLogo from "@/assets/images/sgk.png";

interface OdemelerimScreenProps {
  onBack?: () => void;
}

export const OdemelerimScreen: React.FC<OdemelerimScreenProps> = ({
  onBack,
}) => {
  const paymentHistory = [
    {
      date: "10.08.2026",
      hospital: "Barbaros ASM",
      status: "Beklemede",
      statusColor: "#D97706",
      statusBg: "#FEF3C7",
      amount: "XX TL",
    },
    {
      date: "12.07.2026",
      hospital: "Beytepe ADSM",
      status: "Beklemede",
      statusColor: "#D97706",
      statusBg: "#FEF3C7",
      amount: "XX TL",
    },
    {
      date: "06.06.2026",
      hospital: "Gazi Üni TF Hastanesi",
      status: "Ödendi",
      statusColor: "#047857",
      statusBg: "#D1FAE5",
      amount: "XX TL",
    },
    {
      date: "05.03.2026",
      hospital: "Gazi Üni TF Hastanesi",
      status: "Ödendi",
      statusColor: "#047857",
      statusBg: "#D1FAE5",
      amount: "XX TL",
    },
    {
      date: "10.02.2026",
      hospital: "Gazi Üni TF Hastanesi",
      status: "Ödendi",
      statusColor: "#047857",
      statusBg: "#D1FAE5",
      amount: "XX TL",
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
          <Text style={styles.mainTitle}>ÖDEMELERİM</Text>
          <Text style={styles.subTitle}>
            Katılım payı, ilaç katkı payı ve diğer ödemelerinizi tarih sırasına
            göre görüntüleyin.
          </Text>
        </View>
        <View style={styles.heroImageContainer}>
          <OdemelerimIllustration style={styles.heroIllustration} />
        </View>
      </View>

      {/* 3. Özet Kartları */}
      <View style={styles.summaryCardsRow}>
        <View style={styles.summaryCard}>
          <View style={styles.summaryIconCircle}>
            <ToplamOdemeIcon width={40} height={40} />
          </View>
          <View style={styles.summaryCardContent}>
            <Text style={styles.summaryCardTitle}>Toplam Ödeme</Text>
            <Text style={styles.summaryCardValue}>XX TL</Text>
          </View>
          <Ionicons name="chevron-forward" size={14} color="#888" />
        </View>

        <View style={styles.summaryCard}>
          <View style={styles.summaryIconCircle}>
            <TakvimIcon width={40} height={40} />
          </View>
          <View style={styles.summaryCardContent}>
            <Text style={styles.summaryCardTitle}>Bu Ay</Text>
            <Text style={styles.summaryCardValue}>XX TL</Text>
          </View>
          <Ionicons name="chevron-forward" size={14} color="#888" />
        </View>

        <View style={styles.summaryCard}>
          <View style={styles.summaryIconCircle}>
            <OdenenIcon width={50} height={50} />
          </View>
          <View style={styles.summaryCardContent}>
            <Text style={styles.summaryCardTitle}>Ödenen</Text>
            <Text style={[styles.summaryCardValue, { color: "#047857" }]}>
              XX TL
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={14} color="#888" />
        </View>
      </View>

      <View style={styles.odemelerContainer}>
        {/* 4. Ödeme Geçmişi Bölümü */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Ödeme Geçmişim</Text>
          <TouchableOpacity style={styles.filterButton} activeOpacity={0.8}>
            <FiltreIcon width={18} height={18} />
            <Text style={styles.filterButtonText}>Filtrele</Text>
            <Ionicons
              name="chevron-down"
              size={12}
              color="#003366"
              style={{ marginLeft: 4 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.tableContainer}>
          <View style={styles.tableHeaderRow}>
            <Text style={[styles.tableHeaderText, { flex: 1.2 }]}>Tarih</Text>
            <Text style={[styles.tableHeaderText, { flex: 2 }]}>
              Sağlık Kuruluşu
            </Text>
            <Text
              style={[
                styles.tableHeaderText,
                { flex: 1.3, textAlign: "center" },
              ]}
            >
              Durum
            </Text>
            <Text
              style={[styles.tableHeaderText, { flex: 1, textAlign: "right" }]}
            >
              Tutar
            </Text>
            <Text
              style={[styles.tableHeaderText, { flex: 1, textAlign: "right" }]}
            >
              İşlem
            </Text>
          </View>

          {paymentHistory.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={[styles.tableCellText, { flex: 1.2 }]}>
                {item.date}
              </Text>
              <Text
                style={[styles.tableCellText, { flex: 2, fontWeight: "500" }]}
                numberOfLines={1}
              >
                {item.hospital}
              </Text>

              <View style={{ flex: 1.3, alignItems: "center" }}>
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: item.statusBg },
                  ]}
                >
                  <Text
                    style={[styles.statusText, { color: item.statusColor }]}
                  >
                    {item.status}
                  </Text>
                </View>
              </View>

              <Text
                style={[
                  styles.tableCellText,
                  { flex: 1, textAlign: "right", fontWeight: "bold" },
                ]}
              >
                {item.amount}
              </Text>

              <TouchableOpacity style={styles.actionCell} activeOpacity={0.7}>
                <Text style={styles.actionText}>Detay</Text>
                <Ionicons name="chevron-forward" size={12} color="#004FC6" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.footerInfoBox}>
          <Text style={styles.footerInfoText}>
            Ödemeleriniz eczane, aile hekimi, hastane ve diğer sağlık hizmeti
            sunucularına ilişkin katılım payı, ilaç katkı payı ve diğer
            tutarları içerir.
          </Text>
        </View>
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
    marginBottom: 16,
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
  },
  heroImageContainer: {
    width: 130,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  heroIllustration: {
    width: "100%",
    height: "100%",
  },
  summaryCardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  summaryCard: {
    width: "32%",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 8,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  summaryIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#E3EEF9",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  summaryCardContent: {
    flex: 1,
    marginLeft: 6,
    marginRight: 4,
    justifyContent: "center",
  },
  summaryCardTitle: {
    fontSize: 9,
    color: "#666",
    marginBottom: 1,
  },
  summaryCardValue: {
    fontSize: 11.5,
    fontWeight: "bold",
    color: "#003366",
  },
  odemelerContainer: {
    backgroundColor: "#FEFEFE",
    borderRadius: 12,
    padding: 8,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 4,
    backgroundColor: "#FEFEFE",
    padding: 8,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003366",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D6E4FC",
  },
  filterButtonText: {
    fontSize: 11.5,
    color: "#003366",
    fontWeight: "600",
  },
  tableContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  tableHeaderRow: {
    flexDirection: "row",
    backgroundColor: "#EEF5FB",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EDF2F7",
  },
  tableHeaderText: {
    fontSize: 10.5,
    fontWeight: "bold",
    color: "#5475AB",
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  tableCellText: {
    fontSize: 10,
    color: "#333",
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    width: 68,
    textAlign: "center",
    justifyContent: "center",
  },
  statusText: {
    fontSize: 9.5,
    fontWeight: "bold",
    textAlign: "center",
  },
  actionCell: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  actionText: {
    fontSize: 10.5,
    color: "#004FC6",
    fontWeight: "600",
    marginRight: 2,
  },
  footerInfoBox: {
    backgroundColor: "#EEF5FB",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#D6E4FC",
  },
  footerInfoText: {
    fontSize: 10.5,
    color: "#414676",
    lineHeight: 15,
    textAlign: "center",
  },
});

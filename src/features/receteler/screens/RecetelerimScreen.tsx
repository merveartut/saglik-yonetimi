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

// SVG'leri bileşen olarak, PNG'leri asset olarak import ediyoruz
import ReceteNoIcon from "@/assets/images/receteler-page/recete_no.svg";
import ReceteTeminTarihiIcon from "@/assets/images/receteler-page/recete_temin_tarihi.svg";
import RecetelerIcon from "@/assets/images/receteler-page/receteler.svg";
import { useRouter } from "expo-router";
const SgkLogo = require("@/assets/images/sgk.png");

interface RecetelerimScreenProps {
  onBack?: () => void;
}

export const RecetelerimScreen: React.FC<RecetelerimScreenProps> = ({
  onBack,
}) => {
  const router = useRouter();
  const handleNavigateKontrolPage = () => {
    router.push("/(tabs)/biten-raporlu-ilaclar" as any);
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

      {/* 2. Başlık Alanı */}
      <View style={styles.titleSection}>
        <View style={styles.titleIconContainer}>
          <RecetelerIcon width={40} height={40} />
        </View>
        <View style={styles.titleTextContainer}>
          <Text style={styles.mainTitle}>REÇETELERİM</Text>
          <Text style={styles.subTitle}>
            Aşağıda seçtiğin reçetede yer alan ilaçlar listelenmektedir. Bu
            reçetede yer alan ilaçları ve detaylarını görüntüleyebilirsiniz.
          </Text>
        </View>
      </View>

      {/* 3. Reçete No & Temin Tarihi Alanı */}
      <View style={styles.summaryBar}>
        <View style={styles.summaryItem}>
          <View style={styles.iconBox}>
            <ReceteNoIcon width={50} height={50} />
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.summaryLabel}>Reçete No</Text>
            <Text style={styles.summaryValue}>R1234567890</Text>
          </View>
        </View>
        <View style={styles.summaryDivider} />
        <View style={styles.summaryItem}>
          <View style={styles.iconBox}>
            <ReceteTeminTarihiIcon width={50} height={50} />
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.summaryLabel}>Reçete Temin Tarihi</Text>
            <Text style={styles.summaryValue}>12.08.2026</Text>
          </View>
        </View>
      </View>

      {/* 4. İlaç Kartları Alanı */}
      {/* --- 1. İLAÇ KARTI: ATOR 10 mg tb --- */}
      <View style={styles.medicineCard}>
        <Text style={styles.medicineTitle}>ATOR 10 mg tb</Text>

        <View style={styles.cardMainRow}>
          <View style={styles.detailsColumn}>
            <View style={styles.detailRow}>
              <MaterialCommunityIcons name="pill" size={15} color="#555" />
              <Text style={styles.detailLabel}>Etken madde: </Text>
              <Text style={styles.detailVal}>Atorvastatin</Text>
            </View>

            <View style={styles.detailRow}>
              <MaterialCommunityIcons
                name="calendar-clock"
                size={15}
                color="#555"
              />
              <Text style={styles.detailLabel}>Kullanım: </Text>
              <Text style={styles.detailVal}>Günde 1 tablet</Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons name="document-text-outline" size={15} color="#555" />
              <Text style={styles.detailLabel}>Son reçete: </Text>
              <Text style={styles.detailVal}>12.08.2026</Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons name="bag-check-outline" size={15} color="#555" />
              <Text style={styles.detailLabel}>Eczaneden son temin: </Text>
              <Text style={styles.detailVal}>13.08.2026</Text>
            </View>

            <View style={styles.detailRow}>
              <MaterialCommunityIcons
                name="file-certificate-outline"
                size={15}
                color="#555"
              />
              <Text style={styles.detailLabel}>Rapor durumu: </Text>
              <Text
                style={[
                  styles.detailVal,
                  { color: "#004FC6", fontWeight: "bold" },
                ]}
              >
                Raporlu
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons name="calendar-outline" size={15} color="#555" />
              <Text style={styles.detailLabel}>Rapor bitiş tarihi: </Text>
              <Text style={styles.detailVal}>14.03.2027</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.equivalentBox} activeOpacity={0.8}>
            <Ionicons
              name="information-circle"
              size={22}
              color="#A03030"
              style={{ marginBottom: 6 }}
            />
            <View style={styles.equivalentTextBox}>
              <Text style={styles.equivalentText}>
                Eşdeğer ilaçlar ve fiyat farklarını görüntüleyin
              </Text>
              <Ionicons name="chevron-forward" size={16} color="#A03030" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.alertBanner}>
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <Ionicons
              name="time-outline"
              size={18}
              color="#29291F"
              style={{ marginRight: 6, fontWeight: "bold" }}
            />
            <Text style={styles.alertText}>2 günlük ilacınız kaldı</Text>
          </View>
          <TouchableOpacity
            style={styles.requestButton}
            activeOpacity={0.8}
            onPress={handleNavigateKontrolPage}
          >
            <MaterialCommunityIcons
              name="file-document-edit-outline"
              size={14}
              color="#FFF"
              style={{ marginRight: 4 }}
            />
            <Text style={styles.requestButtonText}>
              Raporlu İlaç Talebi Oluştur
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.regeterDateRow}>
          <Ionicons
            name="calendar-number-outline"
            size={15}
            color="#4B5273"
            style={{ marginRight: 6 }}
          />
          <Text style={styles.regeterDateText}>
            SGK kapsamında yeniden alınabileceği tarih:{" "}
            <Text style={{ fontWeight: "bold", color: "#4B5273" }}>
              08.09.2026
            </Text>
          </Text>
        </View>
      </View>

      {/* --- 2. İLAÇ KARTI: AUGMENTİN 1 gr tb --- */}
      <View style={styles.medicineCard}>
        <Text style={styles.medicineTitle}>AUGMENTİN 1 gr tb</Text>

        <View style={styles.cardMainRow}>
          <View style={styles.detailsColumn}>
            <View style={styles.detailRow}>
              <MaterialCommunityIcons name="pill" size={15} color="#555" />
              <Text style={styles.detailLabel}>Etken madde: </Text>
              <Text style={styles.detailVal}>Amoksisilin Klavulanat</Text>
            </View>

            <View style={styles.detailRow}>
              <MaterialCommunityIcons
                name="calendar-clock"
                size={15}
                color="#555"
              />
              <Text style={styles.detailLabel}>Kullanım: </Text>
              <Text style={styles.detailVal}>Günde 2 tablet</Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons name="document-text-outline" size={15} color="#555" />
              <Text style={styles.detailLabel}>Son reçete: </Text>
              <Text style={styles.detailVal}>12.08.2026</Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons name="bag-check-outline" size={15} color="#555" />
              <Text style={styles.detailLabel}>Eczaneden son temin: </Text>
              <Text style={styles.detailVal}>13.08.2026</Text>
            </View>

            <View style={styles.detailRow}>
              <MaterialCommunityIcons
                name="file-certificate-outline"
                size={15}
                color="#555"
              />
              <Text style={styles.detailLabel}>Rapor durumu: </Text>
              <Text
                style={[
                  styles.detailVal,
                  { color: "#333", fontWeight: "bold" },
                ]}
              >
                Raporsuz
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.equivalentBox} activeOpacity={0.8}>
            <Ionicons
              name="information-circle"
              size={22}
              color="#A03030"
              style={{ marginBottom: 6 }}
            />
            <View style={styles.equivalentTextBox}>
              <Text style={styles.equivalentText}>
                Eşdeğer ilaçlar ve fiyat farklarını görüntüleyin
              </Text>
              <Ionicons name="chevron-forward" size={16} color="#A03030" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Alt Bilgilendirme Notu */}
      <View style={styles.footerInfoBox}>
        <Ionicons
          name="information-circle"
          size={20}
          color="#004FC6"
          style={{ marginRight: 10 }}
        />
        <Text style={styles.footerInfoText}>
          Bu ekranda yalnızca seçtiğiniz reçeteye ait ilaçlar gösterilmektedir.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F7FCFF",
    padding: 16,
    paddingTop: 50,
    paddingBottom: 30,
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
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
  logoWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  sgkLogo: {
    width: 100,
    height: 35,
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
  titleSection: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 14,
    paddingHorizontal: 4,
  },
  titleIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#E0F0FB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  titleTextContainer: {
    flex: 1,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 2,
  },
  subTitle: {
    fontSize: 11.5,
    color: "#555555",
    lineHeight: 16,
  },
  summaryBar: {
    flexDirection: "row",
    backgroundColor: "#EFF6FC",
    borderRadius: 12,
    padding: 8,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D6E4FC",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  summaryItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  summaryDivider: {
    width: 1,
    height: 32,
    backgroundColor: "#E6E7F7",
    marginHorizontal: 8,
  },
  summaryLabel: {
    fontSize: 9.5,
    color: "#464989",
    fontWeight: "bold",
  },
  summaryValue: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#464989",
  },
  medicineCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    borderLeftColor: "#334B9E",
    borderLeftWidth: 3,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  medicineTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 10,
  },
  cardMainRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  detailsColumn: {
    flex: 1,
    marginRight: 10,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  detailLabel: {
    fontSize: 10.5,
    color: "#404255",
    marginLeft: 6,
  },
  detailVal: {
    fontSize: 10.5,
    color: "#565658",
  },
  equivalentBox: {
    flexDirection: "row",
    width: 130,
    backgroundColor: "#FDF6F6",
    borderWidth: 1,
    borderColor: "#EAD5D5",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  equivalentTextBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.8,
  },
  equivalentText: {
    fontSize: 8,
    color: "#8A2828",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 13,
  },
  alertBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FDFADB",
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  alertText: {
    fontSize: 10.5,
    color: "#1D1C1B",
    fontWeight: "bold",
  },
  requestButton: {
    backgroundColor: "#375AA9",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
  },
  requestButtonText: {
    color: "#FFFFFF",
    fontSize: 9.5,
    fontWeight: "600",
  },
  regeterDateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    backgroundColor: "#EBF4FB",
    padding: 6,
    borderRadius: 8,
  },
  regeterDateText: {
    fontSize: 10.5,
    color: "#555",
  },
  footerInfoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E4EFFF",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#D0E2FF",
  },
  footerInfoText: {
    fontSize: 11,
    color: "#003366",
    flex: 1,
  },
});

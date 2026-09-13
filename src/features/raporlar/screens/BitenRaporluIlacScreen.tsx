import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// SVG/PNG varlıklarını bileşen olarak import ediyoruz
import IlaclarimAltIcon from "@/assets/images/raporlar-page/ilaclarim.svg";
import RaporIcon from "@/assets/images/raporlar-page/rapor.svg";
import SeciliIlaclarTalepIcon from "@/assets/images/raporlar-page/secili-ilaclar-rapor-talebi.svg";
import SgkLogo from "@/assets/images/sgk.png";

interface BitenRaporluIlacScreenProps {
  onBack?: () => void;
}

export const BitenRaporluIlacScreen: React.FC<BitenRaporluIlacScreenProps> = ({
  onBack,
}) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedDrugs, setSelectedDrugs] = useState<boolean[]>([true, true]);
  const [declarationChecked, setDeclarationChecked] = useState(false);
  const [isReportExpanded, setIsReportExpanded] = useState(true);

  const toggleDrugSelection = (index: number) => {
    const updated = [...selectedDrugs];
    updated[index] = !updated[index];
    setSelectedDrugs(updated);
    setSelectAll(updated.every(Boolean));
  };

  const toggleSelectAll = () => {
    const nextState = !selectAll;
    setSelectAll(nextState);
    setSelectedDrugs([nextState, nextState]);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* 1. Üst Header Alanı */}
      <View style={styles.topHeader}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBack}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={20} color="#003366" />
          <Text style={styles.backText}>Geri</Text>
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
          <View style={styles.titleRow}>
            <View style={styles.titleIconCircle}>
              <IlaclarimAltIcon width={30} height={30} />
            </View>
            <View style={styles.titleBox}>
              <Text style={styles.mainTitle}>BİTEN RAPORLU İLAÇLARIM</Text>
              <Text style={styles.subTitle}>
                Aşağıda listelenen raporlu ilaçlarınızdan yeniden temin tarihine
                3 gün veya daha az kalanları seçebilir ve raporlu ilaç talebi
                oluşturabilirsiniz.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* 3. Rapor Kartı */}
      <View style={styles.reportCard}>
        <TouchableOpacity
          style={styles.reportHeaderRow}
          activeOpacity={0.8}
          onPress={() => setIsReportExpanded(!isReportExpanded)}
        >
          <View style={styles.reportIconCircle}>
            <RaporIcon width={18} height={18} />
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.reportNoText}>Rapor No: 1234567890</Text>
            <Text style={styles.reportInfoText}>Tanı: Hipertansiyon</Text>
            <Text style={styles.reportInfoText}>
              Rapor Geçerlilik Tarihi: 06.09.2026 – 06.09.2027
            </Text>
          </View>
          <Ionicons
            name={isReportExpanded ? "chevron-up" : "chevron-down"}
            size={20}
            color="#003366"
          />
        </TouchableOpacity>

        {isReportExpanded && (
          <View style={styles.reportContentBody}>
            <View style={styles.tableHeaderRow}>
              <TouchableOpacity
                style={styles.tableHeaderCheckboxContainer}
                onPress={toggleSelectAll}
                activeOpacity={0.8}
              >
                <View
                  style={[styles.checkbox, selectAll && styles.checkboxChecked]}
                >
                  {selectAll && (
                    <Ionicons name="checkmark" size={14} color="#FFF" />
                  )}
                </View>
              </TouchableOpacity>

              <View style={[styles.tableHeaderCell, { flex: 1.3 }]}>
                <Text style={styles.tableHeaderText}>
                  Son reçetenizle eczaneden aldığınız müstahzar
                </Text>
              </View>

              <View style={[styles.tableHeaderCell, { flex: 1 }]}>
                <Text style={styles.tableHeaderText}>Etken Madde</Text>
              </View>

              <View
                style={[
                  styles.tableHeaderCell,
                  { flex: 1.1, borderRightWidth: 0 },
                ]}
              >
                <Text style={[styles.tableHeaderText, { textAlign: "left" }]}>
                  SGK kapsamında yeniden temin tarihi
                </Text>
              </View>
            </View>

            {/* İlaç 1 */}
            <View style={styles.tableItemRow}>
              <TouchableOpacity
                style={styles.tableHeaderCheckboxContainer}
                onPress={() => toggleDrugSelection(0)}
                activeOpacity={0.8}
              >
                <View
                  style={[
                    styles.checkbox,
                    selectedDrugs[0] && styles.checkboxChecked,
                  ]}
                >
                  {selectedDrugs[0] && (
                    <Ionicons name="checkmark" size={14} color="#FFF" />
                  )}
                </View>
              </TouchableOpacity>

              <View style={[styles.tableItemCell, { flex: 1.3 }]}>
                <Text style={styles.drugNameText}>Ator 10 mg tb</Text>
                <View style={styles.warningBadge}>
                  <Ionicons
                    name="alert-circle"
                    size={12}
                    color="#C53030"
                    style={{ marginRight: 3, flexShrink: 0 }}
                  />
                  <Text style={styles.warningBadgeText} numberOfLines={2}>
                    İlacınızın bitmesine 2 gün kaldı
                  </Text>
                </View>
              </View>

              <View style={[styles.tableItemCell, { flex: 1 }]}>
                <Text style={styles.drugDetailText}>Atorvastatin</Text>
              </View>

              <View
                style={[
                  styles.tableItemCell,
                  {
                    flex: 1.1,
                    borderRightWidth: 0,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  },
                ]}
              >
                <Text style={styles.drugDateText}>08.09.2026</Text>
                <Ionicons name="chevron-forward" size={16} color="#666" />
              </View>
            </View>

            {/* İlaç 2 */}
            <View style={[styles.tableItemRow, { borderBottomWidth: 0 }]}>
              <TouchableOpacity
                style={styles.tableHeaderCheckboxContainer}
                onPress={() => toggleDrugSelection(1)}
                activeOpacity={0.8}
              >
                <View
                  style={[
                    styles.checkbox,
                    selectedDrugs[1] && styles.checkboxChecked,
                  ]}
                >
                  {selectedDrugs[1] && (
                    <Ionicons name="checkmark" size={14} color="#FFF" />
                  )}
                </View>
              </TouchableOpacity>

              <View style={[styles.tableItemCell, { flex: 1.3 }]}>
                <Text style={styles.drugNameText}>Ecopirin 100 mg tb</Text>
                <View style={styles.warningBadge}>
                  <Ionicons
                    name="alert-circle"
                    size={12}
                    color="#C53030"
                    style={{ marginRight: 3, flexShrink: 0 }}
                  />
                  <Text style={styles.warningBadgeText} numberOfLines={2}>
                    İlacınızın bitmesine 2 gün kaldı
                  </Text>
                </View>
              </View>

              <View style={[styles.tableItemCell, { flex: 1 }]}>
                <Text style={styles.drugDetailText}>Asetilsalisilik Asit</Text>
              </View>

              <View
                style={[
                  styles.tableItemCell,
                  {
                    flex: 1.1,
                    borderRightWidth: 0,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  },
                ]}
              >
                <Text style={styles.drugDateText}>08.09.2026</Text>
                <Ionicons name="chevron-forward" size={16} color="#666" />
              </View>
            </View>
          </View>
        )}
      </View>

      {/* 4. Beyan / Onay Kartı */}
      <TouchableOpacity
        style={styles.declarationCard}
        activeOpacity={0.8}
        onPress={() => setDeclarationChecked(!declarationChecked)}
      >
        <View
          style={[
            styles.checkbox,
            declarationChecked && styles.checkboxChecked,
            { marginTop: 2 },
          ]}
        >
          {declarationChecked && (
            <Ionicons name="checkmark" size={14} color="#FFF" />
          )}
        </View>
        <Text style={styles.declarationText}>
          Yukarıda raporlu ilaçları listelenen kronik hastalığıma dair aktif
          şikayetim bulunmadığını, bir sonraki kontrol randevuma kadar
          kullanacağım ilaç kalmaması nedeniyle ilaçlarımı talep ettiğimi beyan
          ederim.
        </Text>
      </TouchableOpacity>

      {/* 5. Bilgilendirme Banner */}
      <View style={styles.infoBanner}>
        <View style={styles.infoIconCircle}>
          <Ionicons name="information" size={16} color="#FFF" />
        </View>
        <Text style={styles.infoBannerText}>
          Aktif şikayetiniz bulunması halinde lütfen sağlık kuruluşunuz ile
          iletişime geçiniz.
        </Text>
      </View>

      {/* 6. Talep Oluştur Butonu */}
      <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
        <View style={styles.actionButtonLeft}>
          <SeciliIlaclarTalepIcon width={24} height={24} />
          <Text style={styles.actionButtonText}>
            Seçili ilaçlarla Raporlu İlaç Talebi Oluştur
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#FFF" />
      </TouchableOpacity>
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
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  heroTextContainer: {
    width: "100%",
  },
  titleBox: {
    flexDirection: "column",
    flex: 1,
    gap: 4,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  titleIconCircle: {
    width: 52,
    height: 52,
    borderRadius: 40,
    backgroundColor: "#E4EFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginTop: 2,
    flexShrink: 0,
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003366",
  },
  subTitle: {
    fontSize: 11,
    color: "#49526F",
    lineHeight: 15,
  },
  reportCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    marginBottom: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 2,
  },
  reportHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EDF2F7",
  },
  reportIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#EBF3FE",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  reportNoText: {
    fontSize: 12.5,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 2,
  },
  reportInfoText: {
    fontSize: 10,
    color: "#555",
    lineHeight: 14,
  },
  reportContentBody: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  tableHeaderRow: {
    flexDirection: "row",
    alignItems: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "#EEF7F9",
    backgroundColor: "#E0F2FC",
  },
  tableHeaderCell: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRightWidth: 1,
    borderRightColor: "#EEF7F9",
    justifyContent: "center",
  },
  tableHeaderCheckboxContainer: {
    width: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "#EEF7F9",
    paddingVertical: 8,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#004FC6",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  checkboxChecked: {
    backgroundColor: "#004FC6",
  },
  tableHeaderText: {
    fontSize: 9.5,
    color: "#666",
    fontWeight: "600",
  },
  tableItemRow: {
    flexDirection: "row",
    alignItems: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "#EEF7F9",
  },
  tableItemCell: {
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRightWidth: 1,
    borderRightColor: "#EEF7F9",
    justifyContent: "center",
  },
  drugNameText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 4,
  },
  warningBadge: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "#FDE8E8",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    alignSelf: "flex-start",
    maxWidth: "100%",
  },
  warningBadgeText: {
    fontSize: 8.5,
    color: "#C53030",
    fontWeight: "bold",
    flexShrink: 1,
  },
  drugDetailText: {
    fontSize: 10.5,
    color: "#333",
  },
  drugDateText: {
    fontSize: 10.5,
    fontWeight: "600",
    color: "#333",
  },
  declarationCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    padding: 12,
    marginBottom: 12,
    alignItems: "flex-start",
    gap: 10,
  },
  declarationText: {
    flex: 1,
    fontSize: 11,
    color: "#333",
    lineHeight: 15,
  },
  infoBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DFF1FB",
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    gap: 8,
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
    lineHeight: 14,
  },
  actionButton: {
    backgroundColor: "#2E66B4",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  actionButtonLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  actionButtonText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#FFF",
  },
});

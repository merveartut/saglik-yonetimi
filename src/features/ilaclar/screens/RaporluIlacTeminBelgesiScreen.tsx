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
import AdreseGelsinIcon from "@/assets/images/ilaclar-page/adresime-gonderilsin.svg";
import BelgeTarihiIcon from "@/assets/images/ilaclar-page/belge-olusturma-tarihi.svg";
import EczanedenTeminIcon from "@/assets/images/ilaclar-page/eczaneden-temin-edecegim.svg";
import EczaneyeBildirIcon from "@/assets/images/ilaclar-page/eczaneye-onceden-bildir.svg";
import IkiGunKaldiIcon from "@/assets/images/ilaclar-page/iki-gun-kaldi.svg";
import RaporlarimAltIcon from "@/assets/images/ilaclar-page/raporlarım-alt.svg";
import RaporluIlacTeminNoIcon from "@/assets/images/ilaclar-page/raporlu-ilac-temin-no.svg";
import SgkLogo from "@/assets/images/sgk.png";

interface RaporluIlacTeminBelgesiScreenProps {
  onBack?: () => void;
}

export const RaporluIlacTeminBelgesiScreen: React.FC<
  RaporluIlacTeminBelgesiScreenProps
> = ({ onBack }) => {
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
              <RaporlarimAltIcon width={30} height={30} />
            </View>
            <View style={styles.titleBox}>
              <Text style={styles.mainTitle}>
                Raporlu İlaç Temin Belgeniz Oluşturuldu
              </Text>
              <Text style={styles.subTitle}>
                Aşağıda yer alan raporlu ilaçlar için temin belgeniz
                oluşturulmuştur. İlaçlarınızı aşağıdaki yöntemlerden biriyle
                temin edebilirsiniz.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* 3. Belge Bilgi Kartı */}
      <View style={styles.infoCardRow}>
        <View style={styles.infoSubCard}>
          <View style={styles.smallIconCircle}>
            <RaporluIlacTeminNoIcon width={20} height={20} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.infoCardLabel}>Raporlu İlaç Temin No</Text>
            <Text style={styles.infoCardValue}>R1234567890</Text>
          </View>
        </View>

        <View style={[styles.infoSubCard, { borderRightWidth: 0 }]}>
          <View style={styles.smallIconCircle}>
            <BelgeTarihiIcon width={20} height={20} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.infoCardLabel}>Belge Oluşturulma Tarihi</Text>
            <Text style={styles.infoCardValue}>06.09.2026</Text>
          </View>
        </View>
      </View>

      {/* 4. Bu Belgede Yer Alan İlaçlar Listesi */}
      <View style={styles.contentSection}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Bu belgede yer alan ilaçlar</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.sectionActionText}>
              Tüm detayları gör {">"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* İlaç 1 */}
        <View style={styles.drugCard}>
          <View style={styles.drugLeftCol}>
            <Text style={styles.drugName} numberOfLines={1}>
              ATOR 10 mg tb
            </Text>
            <Text style={styles.drugSubText} numberOfLines={1}>
              Etken madde: Atorvastatin
            </Text>
          </View>
          <View style={styles.drugMiddleCol}>
            <BelgeTarihiIcon width={18} height={18} />
            <View style={{ flex: 1 }}>
              <Text style={styles.dateLabel} numberOfLines={2}>
                SGK kapsamında yeniden temin tarihi
              </Text>
              <Text style={styles.dateValue}>08.09.2026</Text>
            </View>
          </View>
          <View style={styles.drugRightCol}>
            <View style={styles.daysBadgeYellow}>
              <IkiGunKaldiIcon width={14} height={14} />
              <Text style={styles.daysBadgeText}>2 gün kaldı</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#888" />
          </View>
        </View>

        {/* İlaç 2 */}
        <View style={styles.drugCard}>
          <View style={styles.drugLeftCol}>
            <Text style={styles.drugName} numberOfLines={1}>
              ECOPİRİN 100 mg tb
            </Text>
            <Text style={styles.drugSubText} numberOfLines={1}>
              Etken madde: Asetilsalisilik Asit
            </Text>
          </View>
          <View style={styles.drugMiddleCol}>
            <BelgeTarihiIcon width={18} height={18} />
            <View style={{ flex: 1 }}>
              <Text style={styles.dateLabel} numberOfLines={2}>
                SGK kapsamında yeniden temin tarihi
              </Text>
              <Text style={styles.dateValue}>08.09.2026</Text>
            </View>
          </View>
          <View style={styles.drugRightCol}>
            <View style={styles.daysBadgeYellow}>
              <IkiGunKaldiIcon width={14} height={14} />
              <Text style={styles.daysBadgeText}>2 gün kaldı</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#888" />
          </View>
        </View>
      </View>

      {/* 5. Temin Yöntemini Seçin Bölümü */}
      <View style={styles.contentSection}>
        <Text style={[styles.sectionTitle, { marginBottom: 10 }]}>
          Temin yöntemini seçin
        </Text>

        {/* Yöntem 1 */}
        <TouchableOpacity style={styles.methodCard} activeOpacity={0.7}>
          <View style={styles.methodIconBox}>
            <EczanedenTeminIcon width={28} height={28} />
          </View>
          <View style={styles.methodTextContainer}>
            <Text style={styles.methodTitle}>Eczaneden Temin Edeceğim</Text>
            <Text style={styles.methodDesc}>
              Raporlu İlaç Temin Numaranız ile tercih ettiğiniz eczaneye
              başvurarak ilaçlarınızı temin edebilirsiniz.
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#4d7a9c" />
        </TouchableOpacity>

        {/* Yöntem 2 */}
        <TouchableOpacity style={styles.methodCard} activeOpacity={0.7}>
          <View style={styles.methodIconBox}>
            <EczaneyeBildirIcon width={32} height={32} />
          </View>
          <View style={styles.methodTextContainer}>
            <Text style={styles.methodTitle}>Eczaneye Önceden Bildir</Text>
            <Text style={styles.methodDesc}>
              Eczanenizi seçerek temin bilgilerinizi iletebilir, siz eczaneye
              ulaşıncaya kadar ilaçlarınızın hazırlanmasını talep edebilirsiniz.
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#4d7a9c" />
        </TouchableOpacity>

        {/* Yöntem 3 */}
        <TouchableOpacity style={styles.methodCard} activeOpacity={0.7}>
          <View style={styles.methodIconBox}>
            <AdreseGelsinIcon width={32} height={32} />
          </View>
          <View style={styles.methodTextContainer}>
            <Text style={styles.methodTitle}>Adresime Gönderilsin</Text>
            <Text style={styles.methodDesc}>
              İlaçlarınızın belirttiğiniz teslimat adresine ulaştırılması için
              kurye talebi oluşturabilirsiniz.
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#4d7a9c" />
        </TouchableOpacity>
      </View>

      {/* 6. Alt Bilgi Bandı */}
      <View style={styles.infoBanner}>
        <View style={styles.infoIconCircle}>
          <Ionicons name="information" size={14} color="#FFF" />
        </View>
        <Text style={styles.infoBannerText}>
          Seçtiğiniz temin yöntemine göre ilaçlarınız en kısa sürede temin
          edilecektir.
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
    marginBottom: 14,
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
    width: 50,
    height: 50,
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
  infoCardRow: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#EDF6FB",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    overflow: "hidden",
  },
  infoSubCard: {
    flex: 1,
    backgroundColor: "#EDF6FB",
    borderRightWidth: 1,
    borderColor: "#D6E4FC",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  smallIconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  infoCardLabel: {
    fontSize: 9,
    color: "#666",
    marginBottom: 2,
  },
  infoCardValue: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#003366",
  },
  contentSection: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E1E5E5",
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 2,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#003366",
  },
  sectionActionText: {
    fontSize: 11,
    color: "#004FC6",
    fontWeight: "600",
  },
  drugCard: {
    backgroundColor: "#ECF5FA",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    padding: 10,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
  },
  drugLeftCol: {
    flex: 1.1,
    justifyContent: "center",
  },
  drugName: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 2,
  },
  drugSubText: {
    fontSize: 9,
    color: "#666",
  },
  drugMiddleCol: {
    flex: 1.2,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  dateLabel: {
    fontSize: 8,
    color: "#666",
    lineHeight: 11,
  },
  dateValue: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#003366",
  },
  drugRightCol: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    flexShrink: 0,
  },
  daysBadgeYellow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 6,
    gap: 3,
  },
  daysBadgeText: {
    fontSize: 8.5,
    fontWeight: "bold",
    color: "#8A6D00",
  },
  methodCard: {
    backgroundColor: "#EDF6FB",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    padding: 12,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  methodIconBox: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: "#E4EFFF",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  methodTextContainer: {
    flex: 1,
  },
  methodTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 2,
  },
  methodDesc: {
    fontSize: 10,
    color: "#555",
    lineHeight: 13.5,
  },
  infoBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DFF1FB",
    borderRadius: 10,
    padding: 10,
    marginTop: 4,
    gap: 8,
  },
  infoIconCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
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
});

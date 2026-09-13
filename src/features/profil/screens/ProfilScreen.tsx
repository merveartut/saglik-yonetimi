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
import GssDurumIcon from "@/assets/images/profil-page/gss-durumum.svg";
import GssPrimBorcIcon from "@/assets/images/profil-page/gss-prim-borc.svg";
import IletisimBilgileriIcon from "@/assets/images/profil-page/iletisim-bilgileri.svg";
import OzelIzinIcon from "@/assets/images/profil-page/ozel-izin.svg";
import ProfilimIcon from "@/assets/images/profil-page/profilim.svg";
import SaglikGuvencemAltKisiIcon from "@/assets/images/profil-page/saglık-guvencem-altındaki-kisiler.svg";
import SaglikGuvencemIcon from "@/assets/images/profil-page/saglık-guvencem.svg";
import SgkLogo from "@/assets/images/sgk.png";

interface ProfilimScreenProps {
  onBack?: () => void;
}

export const ProfilScreen: React.FC<ProfilimScreenProps> = ({ onBack }) => {
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
          <Text style={styles.mainTitle}>PROFİLİM</Text>
          <Text style={styles.subTitle}>
            Kişisel bilgilerinizi görüntüleyin ve güncelleyin.
          </Text>
        </View>
        <View style={styles.profileAvatarContainer}>
          <ProfilimIcon width={36} height={36} />
        </View>
      </View>

      {/* Kart 1: Kişisel Bilgiler */}
      <TouchableOpacity style={styles.menuCard} activeOpacity={0.7}>
        <View style={styles.cardRow}>
          <View style={styles.iconCircle}>
            <ProfilimIcon width={20} height={20} />
          </View>
          <View style={styles.cardMiddleContainer}>
            <Text style={styles.cardTitle}>Fatma YILMAZ</Text>
            <Text style={styles.cardSubText}>TC: •••••••123</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#888" />
        </View>
      </TouchableOpacity>

      {/* Kart 2: Genel Sağlık Sigortası Durumum */}
      <TouchableOpacity style={styles.menuCard} activeOpacity={0.7}>
        <View style={styles.cardRow}>
          <View style={styles.iconCircle}>
            <GssDurumIcon width={24} height={24} />
          </View>
          <View style={styles.cardMiddleContainer}>
            <Text style={styles.cardTitle}>Genel Sağlık Sigortası Durumum</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>GSS Durumu: </Text>
              <Text style={styles.infoValActive}>Aktif</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>
                Sağlık Hizmetinden Yararlanma Durumu:{" "}
              </Text>
              <Text style={styles.infoValActive}>Müstehak</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#888" />
        </View>
      </TouchableOpacity>

      {/* Kart 3: Sağlık Güvencem */}
      <TouchableOpacity style={styles.menuCard} activeOpacity={0.7}>
        <View style={styles.cardRow}>
          <View style={styles.iconCircle}>
            <SaglikGuvencemIcon width={24} height={24} />
          </View>
          <View style={styles.cardMiddleContainer}>
            <Text style={styles.cardTitle}>Sağlık Güvencem</Text>
            <Text style={styles.cardSubText}>
              Kendi Sigortalılığım Üzerinden- 4/C
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#888" />
        </View>
      </TouchableOpacity>

      {/* Kart 4: Sağlık Güvencem Altındaki Kişiler */}
      <View style={styles.expandedCard}>
        <View style={styles.expandedHeaderRow}>
          <View style={styles.iconCircle}>
            <SaglikGuvencemAltKisiIcon width={24} height={24} />
          </View>
          <Text style={[styles.cardTitle, { flex: 1, marginLeft: 12 }]}>
            Sağlık Güvencem Altındaki Kişiler
          </Text>
        </View>

        <View style={styles.subItemRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.subItemName}>Ayşe Yılmaz (Çocuğum)</Text>
          </View>
          <View style={styles.statusBadgeGreen}>
            <Text style={styles.statusTextGreen}>Aktif</Text>
          </View>
          <TouchableOpacity style={styles.subItemAction} activeOpacity={0.7}>
            <Text style={styles.actionText}>
              Profil değiştirmek için tıklayınız
            </Text>
            <Ionicons
              name="chevron-forward"
              size={14}
              color="#004FC6"
              style={{ marginLeft: 2 }}
            />
          </TouchableOpacity>
        </View>

        <View style={[styles.subItemRow, { borderBottomWidth: 0 }]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.subItemName}>Zeynep Yılmaz (Çocuğum)</Text>
          </View>
          <View style={styles.statusBadgeGreen}>
            <Text style={styles.statusTextGreen}>Aktif</Text>
          </View>
          <TouchableOpacity style={styles.subItemAction} activeOpacity={0.7}>
            <Text style={styles.actionText}>
              Profil değiştirmek için tıklayınız
            </Text>
            <Ionicons
              name="chevron-forward"
              size={14}
              color="#004FC6"
              style={{ marginLeft: 2 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Kart 5: Özel İzinle Görüntüleyebildiğim Profiller */}
      <View style={styles.expandedCard}>
        <View style={styles.expandedHeaderRow}>
          <View style={styles.iconCircle}>
            <OzelIzinIcon width={24} height={24} />
          </View>
          <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Text style={[styles.cardTitle, { flex: 1 }]}>
              Özel İzinle Görüntüleyebildiğim Profiller
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.subItemName}>Ahmet Yılmaz (Babam)</Text>
              <TouchableOpacity
                style={styles.subItemAction}
                activeOpacity={0.7}
              >
                <Text style={styles.actionText}>
                  Profil değiştirmek için tıklayınız
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={14}
                  color="#004FC6"
                  style={{ marginLeft: 2 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Kart 6: GSS Prim / Borç Bilgilerim */}
      <TouchableOpacity style={styles.menuCard} activeOpacity={0.7}>
        <View style={styles.cardRow}>
          <View style={styles.iconCircle}>
            <GssPrimBorcIcon width={24} height={24} />
          </View>
          <View style={styles.cardMiddleContainer}>
            <Text style={styles.cardTitle}>GSS Prim / Borç Bilgilerim</Text>
          </View>
          <TouchableOpacity style={styles.detailLinkAction} activeOpacity={0.7}>
            <Text style={styles.actionText}>Detaylar için tıklayınız</Text>
            <Ionicons
              name="chevron-forward"
              size={14}
              color="#004FC6"
              style={{ marginLeft: 2 }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* Kart 7: İletişim Bilgilerim */}
      <TouchableOpacity style={styles.menuCard} activeOpacity={0.7}>
        <View style={styles.cardRow}>
          <View style={styles.iconCircle}>
            <IletisimBilgileriIcon width={24} height={24} />
          </View>
          <View style={styles.cardMiddleContainer}>
            <Text style={styles.cardTitle}>İletişim Bilgilerim</Text>
          </View>
          <TouchableOpacity style={styles.detailLinkAction} activeOpacity={0.7}>
            <Text style={styles.actionText}>Detaylar için tıklayınız</Text>
            <Ionicons
              name="chevron-forward"
              size={14}
              color="#004FC6"
              style={{ marginLeft: 2 }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#EAF2FA",
    padding: 16,
    paddingTop: 60,
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
    marginTop: 8,
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
  profileAvatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#E4EFFF",
    borderWidth: 1,
    borderColor: "#D0E2FF",
    justifyContent: "center",
    alignItems: "center",
  },
  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    shadowColor: "#000",
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
    marginBottom: 2,
  },
  cardSubText: {
    fontSize: 11,
    color: "#555",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  infoLabel: {
    fontSize: 10,
    color: "#666",
  },
  infoValActive: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#047857",
  },
  expandedCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  expandedHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  subItemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EDF2F7",
    backgroundColor: "#EFF2F8",
    borderRadius: 8,
    marginBottom: 4,
    width: "100%",
  },
  subItemName: {
    fontSize: 11.5,
    color: "#333",
    fontWeight: "500",
  },
  statusBadgeGreen: {
    backgroundColor: "#D1FAE5",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  statusTextGreen: {
    fontSize: 9.5,
    fontWeight: "bold",
    color: "#047857",
  },
  subItemAction: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailLinkAction: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    fontSize: 10,
    color: "#2F3D80",
    fontWeight: "600",
  },
});

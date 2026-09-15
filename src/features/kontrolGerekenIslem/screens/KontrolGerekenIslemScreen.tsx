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
import DetayIcon from "@/assets/images/kontrol-islem-page/detay.svg";
import DogruIslemIcon from "@/assets/images/kontrol-islem-page/dogru-islem.svg";
import HataliIslemIcon from "@/assets/images/kontrol-islem-page/hatali-islem.svg";
import TakvimIcon from "@/assets/images/kontrol-islem-page/takvim.svg";
import UyariIcon from "@/assets/images/kontrol-islem-page/uyarı.svg";
import SgkLogo from "@/assets/images/sgk.png";

interface KontrolEtmenizGerekenIslemScreenProps {
  onBack?: () => void;
  onNotMyAction?: () => void;
  onMyAction?: () => void;
}

export const KontrolEtmenizGerekenIslemScreen: React.FC<
  KontrolEtmenizGerekenIslemScreenProps
> = ({ onBack, onNotMyAction, onMyAction }) => {
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

      {/* 2. Üst Uyarı Başlık Alanı */}
      <View style={styles.headerTitleRow}>
        <View style={styles.alertIconCircle}>
          <UyariIcon width={60} height={60} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.mainTitle}>KONTROL ETMENİZ GEREKEN İŞLEM</Text>
          <Text style={styles.subTitle}>
            Aşağıdaki işleme ait kayıtları kontrol ediniz.
          </Text>
        </View>
      </View>

      {/* 3. İşlem Detay Kartı */}
      <View style={styles.mainDetailCard}>
        <View style={styles.detailHeaderBox}>
          <View style={styles.calendarIconCircle}>
            <TakvimIcon width={42} height={42} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.detailDateHospital}>
              02.08.2026 | Özel A.... Hastanesi
            </Text>
            <Text style={styles.detailActionName}>Beyin MR İşlemi</Text>
          </View>
        </View>

        <View style={styles.detailInfoBox}>
          <View style={styles.detailIconLeftCol}>
            <DetayIcon width={32} height={32} />
          </View>
          <View style={styles.detailTextRightCol}>
            <View style={styles.infoRowText}>
              <Text style={styles.infoTextParagraph}>
                Bu işlem SGK kayıtlarınızda görülmektedir, ancak sağlık
                kayıtlarınızda karşılığı bulunamamıştır.
              </Text>
            </View>

            <View style={styles.infoRowText}>
              <Text style={styles.infoHighlightText}>
                İşlemin size ait olmadığını düşünüyorsanız{" "}
                <Text style={{ fontWeight: "bold" }}>
                  "İşlem Bana Ait Değil"
                </Text>{" "}
                butonuna tıklayınız.
              </Text>
            </View>

            <View style={styles.infoRowText}>
              <Text style={styles.infoTextParagraph}>
                Butona tıklamanız halinde, Özel A.... Hastanesi'ndeki
                kayıtlarınız ve adınıza SGK'ya düzenlenen faturası yeniden
                değerlendirilecek, varsa hatalar giderilecektir.
              </Text>
            </View>
          </View>
        </View>

        {/* 4. Alt Seçim Butonları */}
        <View style={styles.actionButtonsRow}>
          <TouchableOpacity
            style={styles.notMyActionButton}
            activeOpacity={0.8}
            onPress={onNotMyAction}
          >
            <View style={styles.actionButtonInnerContent}>
              <View style={styles.actionIconBoxRed}>
                <HataliIslemIcon width={52} height={52} />
              </View>
              <Text style={styles.notMyActionText}>İşlem Bana Ait Değil</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.myActionButton}
            activeOpacity={0.8}
            onPress={onMyAction}
          >
            <View style={styles.actionButtonInnerContent}>
              <View style={styles.actionIconBoxBlue}>
                <DogruIslemIcon width={52} height={52} />
              </View>
              <Text style={styles.myActionText}>İşlem Bana Ait</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F1F4FB",
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
  headerTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 4,
    gap: 12,
    marginTop: 12,
  },
  alertIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 30,
    backgroundColor: "#FDE8E8",
    borderColor: "#F5C6C2",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  mainTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 2,
  },
  subTitle: {
    fontSize: 11,
    color: "#555",
  },
  mainDetailCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  detailHeaderBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FDF2F2",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F5C6C2",
    padding: 12,
    marginBottom: 12,
    gap: 12,
  },
  calendarIconCircle: {
    width: 42,
    height: 42,
    borderRadius: 19,
    backgroundColor: "#F6CBD4",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  detailDateHospital: {
    fontSize: 10.5,
    color: "#003366",
    marginBottom: 2,
  },
  detailActionName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#003366",
  },
  detailInfoBox: {
    flexDirection: "row",
    alignItems: "center", // Düzeltildi: iOS'te dikey esnemeyi önler
    backgroundColor: "#FAF5F5",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F3D1D1",
    padding: 12,
    marginBottom: 16,
    gap: 10,
  },
  detailIconLeftCol: {
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  detailTextRightCol: {
    flex: 1,
    flexDirection: "column",
    gap: 8,
  },
  infoRowText: {
    width: "100%",
  },
  infoTextParagraph: {
    fontSize: 10.5,
    color: "#003366",
    lineHeight: 15,
  },
  infoHighlightText: {
    fontSize: 10.5,
    color: "#003366",
    lineHeight: 15,
  },
  actionButtonsRow: {
    flexDirection: "row",
    gap: 10,
  },
  notMyActionButton: {
    flex: 1,
    backgroundColor: "#FCF0F4",
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#E2A0A0",
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  myActionButton: {
    flex: 1,
    backgroundColor: "#F1F4FB",
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#D6E4FC",
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  actionButtonInnerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  actionIconBoxRed: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  badgeIconRed: {
    position: "absolute",
    bottom: -3,
    right: -3,
    backgroundColor: "#C53030",
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  actionIconBoxBlue: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  badgeIconGreen: {
    position: "absolute",
    bottom: -3,
    right: -3,
    backgroundColor: "#047857",
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  notMyActionText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#A03030",
  },
  myActionText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#003366",
  },
});

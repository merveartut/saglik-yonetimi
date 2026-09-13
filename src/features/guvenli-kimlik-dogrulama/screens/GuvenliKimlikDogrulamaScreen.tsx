import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// SVG'leri bileşen olarak import ediyoruz
import CheckboxIcon from "@/assets/images/guvenli-kimlik-dogrulama/checkbox.svg";
import SaglikKurulusuIcon from "@/assets/images/guvenli-kimlik-dogrulama/saglik-kurulusu-basvurularım.svg";

interface GuvenliKimlikDogrulamaScreenProps {
  onBack?: () => void;
  onInfoPress?: () => void;
  onRefreshQR?: () => void;
}

export const GuvenliKimlikDogrulamaScreen: React.FC<
  GuvenliKimlikDogrulamaScreenProps
> = ({ onBack, onInfoPress, onRefreshQR }) => {
  const [timeLeft, setTimeLeft] = useState(178);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
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
          <Ionicons name="chevron-back" size={22} color="#003366" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Güvenli Kimlik Doğrulama</Text>

        <TouchableOpacity
          style={styles.infoButton}
          onPress={onInfoPress}
          activeOpacity={0.7}
        >
          <Ionicons
            name="information-circle-outline"
            size={24}
            color="#003366"
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: "#EEF5FB",
          padding: 8,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#e7f1f9",
        }}
      >
        {/* 2. Ana Başlık ve İllüstrasyon Alanı */}
        <View style={styles.mainHeaderSection}>
          <View style={styles.hospitalIconCircle}>
            <SaglikKurulusuIcon width={52} height={52} />
          </View>
          <Text style={styles.mainTitle}>
            Sağlık Kuruluşunda{"\n"}Kimliğimi Doğrula
          </Text>
          <Text style={styles.subTitle}>
            Aşağıdaki QR kodu, kimliğinizi doğrulamak için tek kullanımlıktır.
            Lütfen sağlık kuruluşundaki görevliye okutunuz.
          </Text>
        </View>

        {/* 3. QR Kod Kartı */}
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          <View style={styles.qrCard}>
            <Text style={styles.timerLabel}>QR kodun geçerlilik süresi</Text>
            <Text style={styles.timerValue}>{formatTime(timeLeft)}</Text>

            {/* QR Kod Görsel Alanı */}
            <View style={styles.qrCodeBox}>
              <View style={styles.qrPlaceholderBox}>
                <Ionicons name="qr-code-outline" size={120} color="#003366" />
              </View>
            </View>

            {/* Alt Uyarı Notu */}
            <View style={styles.qrFooterNoteRow}>
              <CheckboxIcon width={42} height={42} />
              <Text style={styles.qrFooterNoteText}>
                Bu QR kod yalnızca size özeldir ve tek seferlik kullanıma
                yöneliktir.
              </Text>
            </View>
          </View>
        </View>

        {/* 4. Nasıl Kullanılır Bölümü */}
        <View style={styles.instructionCard}>
          <Text style={styles.instructionHeader}>Nasıl Kullanılır?</Text>

          <View style={styles.stepRow}>
            <View style={styles.stepBadge}>
              <Text style={styles.stepNumber}>1</Text>
            </View>
            <Text style={styles.stepText}>
              Sağlık kuruluşundaki görevliye bu ekranı gösteriniz.
            </Text>
          </View>

          <View style={styles.stepRow}>
            <View style={styles.stepBadge}>
              <Text style={styles.stepNumber}>2</Text>
            </View>
            <Text style={styles.stepText}>
              Görevli QR kodu sisteme okutarak kimliğinizi doğrular.
            </Text>
          </View>

          <View style={styles.stepRow}>
            <View style={styles.stepBadge}>
              <Text style={styles.stepNumber}>3</Text>
            </View>
            <Text style={styles.stepText}>
              Doğrulama tamamlandığında ekranda onay bilgisi görüntülenecektir.
            </Text>
          </View>
        </View>

        {/* 5. Süre Uyarısı Bandı */}
        <View style={styles.infoBanner}>
          <View style={styles.infoIconCircle}>
            <Ionicons name="time-outline" size={16} color="#3C58A7" />
          </View>
          <Text style={styles.infoBannerText}>
            Süre dolduğunda yeni QR kod oluşturmanız gerekecektir.
          </Text>
        </View>

        {/* 6. Yeni QR Kod Oluştur Butonu */}
        <TouchableOpacity
          style={styles.refreshButton}
          activeOpacity={0.8}
          onPress={onRefreshQR}
        >
          <Ionicons
            name="reload"
            size={18}
            color="#004FC6"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.refreshButtonText}>Yeni QR Kod Oluştur</Text>
        </TouchableOpacity>
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
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003366",
  },
  infoButton: {
    padding: 4,
  },
  mainHeaderSection: {
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  hospitalIconCircle: {
    width: 80,
    height: 80,
    borderRadius: 42,
    padding: 8,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#D0E2FF",
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003366",
    textAlign: "center",
    marginBottom: 6,
    lineHeight: 22,
  },
  subTitle: {
    fontSize: 10.5,
    color: "#3863A9",
    textAlign: "center",
    lineHeight: 15,
    width: 240,
  },
  qrCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    padding: 8,
    alignItems: "center",
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
    width: 280,
  },
  timerLabel: {
    fontSize: 11,
    color: "#3863A9",
    marginBottom: 2,
  },
  timerValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3863A9",
    marginBottom: 14,
  },
  qrCodeBox: {
    padding: 4,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#D6E4FC",
    marginBottom: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  qrPlaceholderBox: {
    width: 140,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
  },
  qrFooterNoteRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    width: 220,
    gap: 8,
  },
  qrFooterNoteText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#506eb3",
    flex: 1,
  },
  instructionCard: {
    backgroundColor: "#E7F0F9",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    padding: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 1,
  },
  instructionHeader: {
    fontSize: 12.5,
    fontWeight: "bold",
    color: "#3863A9",
    marginBottom: 10,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  stepBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#3863A9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    flexShrink: 0,
  },
  stepNumber: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#FFF",
  },
  stepText: {
    fontSize: 10.5,
    color: "#3863A9",
    lineHeight: 14,
    flex: 1,
  },
  infoBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E4EFFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 14,
    gap: 10,
    borderWidth: 1,
    borderColor: "#D0E2FF",
  },
  infoIconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  infoBannerText: {
    flex: 1,
    fontSize: 10.5,
    color: "#003366",
    lineHeight: 14.5,
    fontWeight: "500",
  },
  refreshButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#004FC6",
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 1,
  },
  refreshButtonText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#004FC6",
  },
});

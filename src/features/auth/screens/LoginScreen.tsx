import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface LoginScreenProps {
  onLoginPress: () => void;
}

export function LoginScreen() {
  const handleLoginPress = () => {
    router.replace("/(tabs)/" as never);
  };
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Üst Kavisli Desen Alanı (Logo, Başlık ve Slogan İçinde) */}
      <View style={styles.circlePatternContainer}>
        <Image
          source={require("@/assets/images/sgk.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.mainTitle}>
          SGK SOSYAL SAĞLIK {"\n"} UYGULAMASI
        </Text>
        <Text style={styles.slogan}>Sağlığınız Güvende, Bilginiz Elinizde</Text>
      </View>

      {/* Aile ve Kalkan İllüstrasyonu (Kavisli Alanın Hemen Altında) */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require("@/assets/images/family.png")}
          style={styles.illustrationImage}
          resizeMode="contain"
        />
      </View>

      {/* Ana Beyaz Kart Alanı */}
      <View style={styles.cardContainer}>
        {/* 1. e-Devlet Girişi Butonu (Doğrudan Anasayfaya Yönlendirir) */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleLoginPress}
          activeOpacity={0.85}
        >
          <View style={styles.buttonLeftContent}>
            <View style={styles.eLogoCircle}>
              <Image
                source={require("@/assets/images/edevlet-icon.png")}
                style={styles.eLogoImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.primaryButtonText}>
              e-Devlet Girişi İçin Tıklayınız
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.infoSubText}>
          e-Devlet şifreniz ile güvenli giriş yapabilirsiniz.
        </Text>

        {/* 'veya' Çizgisi */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>veya</Text>
          <View style={styles.line} />
        </View>

        {/* 2. Hızlı Giriş Butonu */}
        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => {}}
          activeOpacity={0.85}
        >
          <View style={styles.buttonLeftContent}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#004FC6"
              style={{
                marginRight: 10,
                backgroundColor: "#DCEAFC",
                borderRadius: 100,
                padding: 6,
              }}
            />
            <Text style={styles.outlineButtonText}>
              Hızlı Giriş İçin Tıklayınız
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#004FC6" />
        </TouchableOpacity>

        {/* 3. Güvenli Kimlik Doğrulama Kutusu */}
        <TouchableOpacity
          style={styles.qrBox}
          onPress={() => {}}
          activeOpacity={0.85}
        >
          <View style={styles.qrIconContainer}>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={42}
              color="#004FC6"
            />
          </View>
          <View style={styles.qrTextContainer}>
            <Text style={styles.qrTitle}>Güvenli Kimlik Doğrulama</Text>
            <Text style={styles.qrDesc}>
              Uygulama üzerinden oluşturacağınız QR kod ile sağlık kuruluşunda
              kimliğinizi güvenli şekilde doğrulayabilirsiniz.
            </Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={18}
            color="#004FC6"
            style={{ alignSelf: "center", marginLeft: 4 }}
          />
        </TouchableOpacity>
      </View>

      {/* Alt Üçlü Özellik Alanı */}
      <View style={styles.footerFeatures}>
        <View style={styles.featureItem}>
          <Ionicons name="shield-outline" size={22} color="#004FC6" />
          <Text style={styles.featureText}>Güvenli{"\n"}Erişim</Text>
        </View>
        <View style={styles.featureDivider} />
        <View style={styles.featureItem}>
          <Ionicons name="lock-closed-outline" size={22} color="#004FC6" />
          <Text style={styles.featureText}>
            Kişisel Verileriniz{"\n"}Korunur
          </Text>
        </View>
        <View style={styles.featureDivider} />
        <View style={styles.featureItem}>
          <Ionicons name="time-outline" size={22} color="#004FC6" />
          <Text style={styles.featureText}>7/24 Hizmet{"\n"}Erişimi</Text>
        </View>
      </View>

      {/* En Alt Mavi Bant */}
      <View style={styles.bottomBar}>
        <Text style={styles.bottomBarText}>SGK | Güvenilir. Hızlı. Kolay.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#E9F1FD",
    padding: 16,
    paddingTop: 0,
  },
  circlePatternContainer: {
    backgroundColor: "#F1F5FE",
    borderBottomLeftRadius: 220,
    borderBottomRightRadius: 220,
    borderColor: "#D8E3FA",
    borderWidth: 2,
    paddingTop: 70,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    overflow: "hidden",
    transform: [{ scaleX: 1.5 }],
  },
  logoImage: {
    width: 130,
    height: 40,
    marginBottom: 6,
    transform: [{ scaleX: 0.77 }],
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003A96",
    textAlign: "center",
    transform: [{ scaleX: 0.77 }],
  },
  slogan: {
    fontSize: 11,
    color: "#555555",
    marginTop: 3,
    transform: [{ scaleX: 0.77 }],
  },
  illustrationContainer: {
    width: "100%",
    height: 135,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  illustrationImage: {
    width: "100%",
    height: "100%",
  },
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#D6E4FC",
  },
  primaryButton: {
    backgroundColor: "#004FC6",
    borderRadius: 10,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },
  buttonLeftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  eLogoCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  eLogoImage: {
    width: 16,
    height: 16,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 14.5,
    fontWeight: "600",
  },
  infoSubText: {
    fontSize: 10.5,
    color: "#666666",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 12,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E6E7F7",
  },
  dividerText: {
    marginHorizontal: 12,
    color: "#495074",
    fontSize: 11.5,
  },
  outlineButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#004FC6",
    borderRadius: 10,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  outlineButtonText: {
    color: "#004FC6",
    fontSize: 14.5,
    fontWeight: "600",
  },
  qrBox: {
    backgroundColor: "#E9F1FD",
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D4E4FC",
  },
  qrIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: "#E4EFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  qrTextContainer: {
    flex: 1,
    marginRight: 4,
  },
  qrTitle: {
    fontSize: 12.5,
    fontWeight: "bold",
    color: "#285DD9",
    marginBottom: 2,
  },
  qrDesc: {
    fontSize: 9.5,
    color: "#555555",
    lineHeight: 13.5,
  },
  footerFeatures: {
    flexDirection: "row",
    backgroundColor: "#DCEBFE",
    borderRadius: 14,
    padding: 12,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#D6E4FC",
  },
  featureItem: {
    alignItems: "center",
    flex: 1,
  },
  featureText: {
    fontSize: 9.5,
    color: "#6d7891",
    textAlign: "center",
    marginTop: 4,
    lineHeight: 13,
    fontWeight: "500",
  },
  featureDivider: {
    width: 1,
    height: 32,
    backgroundColor: "#D6E4FC",
  },
  bottomBar: {
    backgroundColor: "#004FC6",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 10,
  },
  bottomBarText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
});

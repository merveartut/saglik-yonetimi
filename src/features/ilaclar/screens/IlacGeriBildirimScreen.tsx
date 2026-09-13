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

// SVG'leri bileşen olarak import ediyoruz
import TrikaftaIcon from "@/assets/images/ilaclar-page/trikafta.svg";
import SgkLogo from "@/assets/images/sgk.png";

interface IlacGeriBildirimScreenProps {
  onBack?: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
}

export const IlacGeriBildirimScreen: React.FC<IlacGeriBildirimScreenProps> = ({
  onBack,
  onCancel,
  onSubmit,
}) => {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({
    1: 4,
    2: 4,
    3: 4,
    4: 4,
    5: 4,
  });

  const handleSelect = (questionIndex: number, value: number) => {
    setAnswers({ ...answers, [questionIndex]: value });
  };

  const questions = [
    {
      id: 1,
      title:
        "Trikafta tedavisine başladıktan sonra solunumla ilgili şikayetlerinizde nasıl bir değişiklik oldu?",
      subTitle: "(Öksürük, balgam, nefes darlığı gibi)",
      options: [
        "Çok kötüleşti",
        "Biraz kötüleşti",
        "Değişmedi",
        "Biraz iyileşti",
        "Çok iyileşti",
      ],
    },
    {
      id: 2,
      title:
        "Günlük fiziksel aktivitelerinizi yapabilme durumunuzda nasıl bir değişiklik oldu?",
      subTitle: "(Yürüme, merdiven çıkma, günlük işlerinizi yapma gibi)",
      options: [
        "Çok kötüleşti",
        "Biraz kötüleşti",
        "Değişmedi",
        "Biraz iyileşti",
        "Çok iyileşti",
      ],
    },
    {
      id: 3,
      title:
        "Trikafta kullanmaya başladıktan sonra, hastalığınız nedeniyle sağlık kuruluşuna başvurma veya ek tedavi alma ihtiyacınızda nasıl bir değişiklik oldu?",
      subTitle: "",
      options: [
        "Çok arttı",
        "Biraz arttı",
        "Değişmedi",
        "Biraz azaldı",
        "Çok azaldı",
      ],
    },
    {
      id: 4,
      title:
        "Genel sağlık durumunuzu Trikafta kullanmaya başlamadan önceki döneme göre nasıl değerlendirirsiniz?",
      subTitle: "",
      options: [
        "Çok daha kötü",
        "Daha kötü",
        "Değişmedi",
        "Daha iyi",
        "Çok daha iyi",
      ],
    },
    {
      id: 5,
      title:
        "Genel olarak Trikafta tedavisinden ne ölçüde fayda gördüğümüzü düşünüyorsunuz?",
      subTitle: "",
      options: [
        "Hiç fayda görmedim",
        "Çok az",
        "Orta düzeyde",
        "Oldukça",
        "Çok fazla",
      ],
    },
  ];

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

      {/* 2. Üst Bilgi ve İlaç Tanıtım Kartı */}
      <View style={styles.topSectionRow}>
        <View style={styles.topLeftCol}>
          <Text style={styles.mainTitle}>İlaç Geri Bildirimi</Text>
          <Text style={styles.subText}>Deneyiminiz bizim için değerli.</Text>
          <Text style={styles.descText}>
            Bu kısa anket ile kullandığınız ilaçla ilgili deneyiminizi
            paylaşabilir, daha iyi sağlık hizmetleri sunulmasına katkıda
            bulunabilirsiniz.
          </Text>
          <View style={styles.timeRow}>
            <Ionicons name="time-outline" size={13} color="#555" />
            <Text style={styles.timeText}>Yaklaşık 1 dakika sürer.</Text>
          </View>
        </View>

        <View style={styles.drugInfoCard}>
          <View style={styles.drugInfoTextCol}>
            <Text style={styles.drugTitle}>TRİKAFTA®</Text>
            <Text style={styles.drugSubTitle}>
              (elexacaftor/tezacaftor/ivacaftor)
            </Text>
            <Text style={styles.drugDesc}>
              Kistik fibrozis tedavisinde kullanılan bir ilaçtır.
            </Text>
          </View>
          <View style={styles.drugIconBox}>
            <TrikaftaIcon width={60} height={60} />
          </View>
        </View>
      </View>

      {/* 3. Sorular Listesi */}
      {questions.map((q) => (
        <View key={q.id} style={styles.questionCard}>
          <View style={styles.questionHeader}>
            <View style={styles.qNumberBadge}>
              <Text style={styles.qNumberText}>{q.id}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.questionTitle}>{q.title}</Text>
              {q.subTitle ? (
                <Text style={styles.questionSubTitle}>{q.subTitle}</Text>
              ) : null}
            </View>
          </View>

          {/* Seçenekler Satırı */}
          <View style={styles.optionsContainer}>
            {[1, 2, 3, 4, 5].map((val) => {
              const isSelected = answers[q.id] === val;
              return (
                <TouchableOpacity
                  key={val}
                  style={styles.optionItem}
                  activeOpacity={0.7}
                  onPress={() => handleSelect(q.id, val)}
                >
                  <View
                    style={[
                      styles.radioButton,
                      isSelected && styles.radioButtonSelected,
                    ]}
                  >
                    {isSelected && <View style={styles.radioInnerDot} />}
                  </View>
                  <View style={{ flexDirection: "column" }}>
                    <Text
                      style={[
                        styles.optionNumberText,
                        isSelected && styles.optionNumberTextSelected,
                      ]}
                    >
                      {val}
                    </Text>
                    <Text style={styles.optionLabelText} numberOfLines={2}>
                      {q.options[val - 1]}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ))}

      {/* 4. Bilgilendirme Banner */}
      <View style={styles.infoBanner}>
        <View style={styles.infoIconCircle}>
          <Ionicons name="information" size={14} color="#FFF" />
        </View>
        <Text style={styles.infoBannerText}>
          Geri bildirimleriniz kişisel sağlık verilerinizin güvenliği
          çerçevesinde saklanmakta ve yalnızca hizmet kalitesinin geliştirilmesi
          amacıyla kullanılmaktadır.
        </Text>
      </View>

      {/* 5. Alt Butonlar */}
      <View style={styles.bottomButtonsRow}>
        <TouchableOpacity
          style={styles.cancelButton}
          activeOpacity={0.8}
          onPress={onCancel}
        >
          <Text style={styles.cancelButtonText}>Vazgeç</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitButton}
          activeOpacity={0.8}
          onPress={onSubmit}
        >
          <Text style={styles.submitButtonText}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#EDF6FD",
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
  topSectionRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
    alignItems: "stretch",
  },
  topLeftCol: {
    flex: 1.2,
    justifyContent: "center",
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#242528",
    marginBottom: 2,
  },
  subText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#555",
    marginBottom: 4,
  },
  descText: {
    fontSize: 9.5,
    color: "#555",
    lineHeight: 13,
    marginBottom: 6,
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  timeText: {
    fontSize: 9.5,
    color: "#666",
    fontStyle: "italic",
  },
  drugInfoCard: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 1,
  },
  drugInfoTextCol: {
    flex: 1,
    paddingRight: 4,
    borderRadius: 12,
    borderColor: "#D6E9F6",
    borderWidth: 2,
    shadowColor: "#8dc6eb",
    padding: 10,
  },
  drugTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#003366",
  },
  drugSubTitle: {
    fontSize: 8.5,
    color: "#555",
    marginBottom: 4,
  },
  drugDesc: {
    fontSize: 8.5,
    color: "#666",
    lineHeight: 11,
  },
  drugIconBox: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#E4EFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  questionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    padding: 12,
    marginBottom: 4,
    elevation: 1,
  },
  questionHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
    gap: 8,
  },
  qNumberBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#E4EFFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
  },
  qNumberText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#004FC6",
  },
  questionTitle: {
    fontSize: 11.5,
    fontWeight: "bold",
    color: "#003366",
    lineHeight: 16,
  },
  questionSubTitle: {
    fontSize: 10,
    color: "#666",
    marginTop: 2,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 24,
  },
  optionItem: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
    paddingHorizontal: 2,
  },
  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#A0B8E2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
    backgroundColor: "#FFF",
  },
  radioButtonSelected: {
    borderColor: "#004FC6",
  },
  radioInnerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#004FC6",
  },
  optionNumberText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 2,
  },
  optionNumberTextSelected: {
    color: "#004FC6",
  },
  optionLabelText: {
    fontSize: 7.5,
    color: "#666",
    textAlign: "center",
    lineHeight: 10,
  },
  infoBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DFF1FB",
    borderRadius: 10,
    padding: 10,
    marginTop: 4,
    marginBottom: 14,
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
    fontSize: 10,
    color: "#18181b",
    lineHeight: 14,
  },
  bottomButtonsRow: {
    flexDirection: "row",
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#EAF4FD",
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#004FC6",
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#004FC6",
  },
  submitButton: {
    flex: 1,
    backgroundColor: "#2E66B4",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  submitButtonText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#FFF",
  },
});

import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

// SVG'leri bileşen olarak import ediyoruz
import CircularPatternWhite from "@/assets/images/circular-pattern-white.svg";
import SgkLogo from "@/assets/images/sgk.png";
import BakmaklaYukumluKisilerIcon from "@/assets/images/sgkya-sor/bakmakla-yukumlu-kisiler.svg";
import EsdegerIlacIcon from "@/assets/images/sgkya-sor/esdeger-ilac.svg";
import GssNedirIcon from "@/assets/images/sgkya-sor/gss-nedir.svg";
import HeroImage from "@/assets/images/sgkya-sor/hero-image.svg";
import IlacFiyatFarkiIcon from "@/assets/images/sgkya-sor/ilac-fiyat-farki.svg";
import IlaveUcretIcon from "@/assets/images/sgkya-sor/ilave-ucret.svg";
import ProvizyonIcon from "@/assets/images/sgkya-sor/provizyon.svg";
import RaporNeIseYararIcon from "@/assets/images/sgkya-sor/rapor-ne-ise-yarar.svg";
import SgkSozlesmeliIcon from "@/assets/images/sgkya-sor/sgk-sozlesmeli.svg";
import TibbiMalzemeIcon from "@/assets/images/sgkya-sor/tibbi-malzeme.svg";
import YurtDisiIcon from "@/assets/images/sgkya-sor/yurt-disi.svg";

interface SgkyaSorScreenProps {
  onBack?: () => void;
  onSubmitQuestion?: (question: string) => void;
}

export const SgkyaSorScreen: React.FC<SgkyaSorScreenProps> = ({
  onBack,
  onSubmitQuestion,
}) => {
  const [questionText, setQuestionText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories = [
    "Tümü",
    "Genel Sağlık Sigortası",
    "İlaçlar",
    "Tıbbi Cihazlar",
    "Sağlık Hizmetleri",
    "Ödemeler",
  ];

  const faqList = [
    {
      id: 1,
      title: "Genel Sağlık Sigortası (GSS) nedir, kimler faydalanabilir?",
      ImageComponent: GssNedirIcon,
    },
    {
      id: 2,
      title:
        "SGK ile sözleşmeli sağlık hizmeti sunucularını nasıl öğrenebilirim?",
      ImageComponent: SgkSozlesmeliIcon,
    },
    {
      id: 3,
      title: "Eşdeğer ilaç nedir?",
      ImageComponent: EsdegerIlacIcon,
    },
    {
      id: 4,
      title: "İlaç fiyat farkı neden oluşur, nasıl hesaplanır?",
      ImageComponent: IlacFiyatFarkiIcon,
    },
    {
      id: 5,
      title: "Rapor ne işe yarar, nasıl alınır?",
      ImageComponent: RaporNeIseYararIcon,
    },
    {
      id: 6,
      title: "İlave ücret nedir, hangi durumlarda ödenir?",
      ImageComponent: IlaveUcretIcon,
    },
    {
      id: 7,
      title: " Provizyon nedir, nasıl alınır?",
      ImageComponent: ProvizyonIcon,
    },
    {
      id: 8,
      title: "Yurt dışı ilaç nasıl temin edilir?",
      ImageComponent: YurtDisiIcon,
    },
    {
      id: 9,
      title: "Tıbbi malzeme ve cihazlar SGK tarafından karşılanıyor mu?",
      ImageComponent: TibbiMalzemeIcon,
    },
    {
      id: 10,
      title: "Bakmakla yükümlü olduğum kişiler kimlerdir?",
      ImageComponent: BakmaklaYukumluKisilerIcon,
    },
  ];

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

      {/* 2. Banner Alanı */}
      <View style={styles.heroBanner}>
        <View style={styles.heroTextContainer}>
          <Text style={styles.mainTitle}>SGK'ya Sor</Text>
          <Text style={styles.subTitle}>
            Genel Sağlık Sigortası ve SGK sağlık hizmetleriyle ilgili merak
            ettiğiniz soruları bize iletebilirsiniz. Uzman ekibimiz en kısa
            sürede yanıtlayacaktır.
          </Text>
        </View>
        <View style={styles.heroImageContainer}>
          <HeroImage width={220} height={120} />
        </View>
      </View>

      {/* 3. Soru Yazma & Gönderme Kartı */}
      <View style={styles.questionInputCard}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <TextInput
            style={styles.textInputArea}
            placeholder="Sorunuzu yazınız..."
            placeholderTextColor="#999"
            multiline
            maxLength={500}
            value={questionText}
            onChangeText={setQuestionText}
          />
          <View style={styles.inputFooterRow}>
            <View style={styles.inputActionsRight}>
              <TouchableOpacity style={styles.attachButton} activeOpacity={0.7}>
                <Text style={styles.attachButtonText}>Dosya Ekle</Text>
                <Text style={styles.attachSubText}>(isteğe bağlı)</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.submitButton}
                activeOpacity={0.8}
                onPress={() =>
                  onSubmitQuestion && onSubmitQuestion(questionText)
                }
              >
                <Text style={styles.submitButtonText}>SGK'ya Sor</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.charCounterText}>{questionText.length}/500</Text>
      </View>

      {/* 4. Kategori Filtreleme Çubuğu */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipsContainer}
      >
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <TouchableOpacity
              key={cat}
              style={[styles.chip, isSelected && styles.chipSelected]}
              activeOpacity={0.7}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text
                style={[styles.chipText, isSelected && styles.chipTextSelected]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* 5. Sık Sorulan Sorular Bölümü */}
      <View
        style={{
          backgroundColor: "#EFF7FD",
          marginTop: 6,
          borderWidth: 1,
          borderRadius: 12,
          borderColor: "#f5f5f5",
          padding: 4,
        }}
      >
        <View style={styles.faqSectionHeader}>
          <Text style={styles.sectionTitle}>Sık Sorulan Sorular</Text>
          <View style={styles.searchBox}>
            <Ionicons
              name="search"
              size={14}
              color="#666"
              style={{ marginRight: 6 }}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Soru ara..."
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        <View style={styles.faqContainer}>
          {faqList.map((item, index) => {
            const isExpanded = expandedIndex === index;
            const ImgComp = item.ImageComponent;
            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.faqRow,
                  index === faqList.length - 1 && { borderBottomWidth: 0 },
                ]}
                activeOpacity={0.8}
                onPress={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <View style={styles.faqIconCircle}>
                  <ImgComp width={80} height={80} />
                </View>
                <Text style={styles.faqTitle} numberOfLines={2}>
                  {item.title}
                </Text>
                <Ionicons
                  name={isExpanded ? "chevron-up" : "chevron-down"}
                  size={16}
                  color="#666"
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#E4F1FA",
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
  heroTextContainer: {
    flex: 1,
    paddingRight: 8,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 9.5,
    color: "#49526F",
    lineHeight: 14,
  },
  heroImageContainer: {
    flex: 0.9,
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: -24,
  },
  questionInputCard: {
    flexDirection: "column",
    backgroundColor: "#FEFEFF",
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 2,
  },
  textInputArea: {
    flex: 1.8,
    width: "auto",
    height: 40,
    fontSize: 11,
    color: "#333",
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "#524d4d6f",
    borderRadius: 8,
    padding: 4,
    marginBottom: 4,
  },
  inputFooterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  charCounterText: {
    fontSize: 9,
    color: "#888",
    marginBottom: 6,
  },
  inputActionsRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  attachButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  attachButtonText: {
    fontSize: 10.5,
    fontWeight: "bold",
    color: "#003366",
  },
  attachSubText: {
    fontSize: 8,
    color: "#777",
  },
  submitButton: {
    backgroundColor: "#2E66B4",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#FFF",
  },
  chipsContainer: {
    backgroundColor: "#F2F8FD",
    padding: 6,
  },
  chip: {
    backgroundColor: "#E4EFFF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D0E2FF",
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
  },
  chipSelected: {
    backgroundColor: "#96B1DE",
    borderColor: "#003366",
  },
  chipText: {
    fontSize: 8,
    fontWeight: "600",
    color: "#003366",
  },
  chipTextSelected: {
    color: "#003366",
  },
  faqSectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 2,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#003366",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#D6E4FC",
    paddingHorizontal: 10,
    height: 32,
    width: 140,
  },
  searchInput: {
    flex: 1,
    fontSize: 10,
    color: "#333",
    padding: 0,
  },
  faqContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 2,
  },
  faqRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: "#EDF2F7",
    borderRadius: 16,
    marginBottom: 4,
    backgroundColor: "#FFFFFF",
    gap: 10,
  },
  faqIconCircle: {
    width: 42,
    height: 42,
    borderRadius: 30,
    backgroundColor: "#D8E9F9",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  faqTitle: {
    flex: 1,
    fontSize: 11,
    color: "#003366",
    fontWeight: "500",
  },
});

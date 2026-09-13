import { GuvenliKimlikDogrulamaScreen } from "@/features/guvenli-kimlik-dogrulama/screens/GuvenliKimlikDogrulamaScreen";
import { useRouter } from "expo-router";

const GuvenliKimlikDogrulamaPage = () => {
  const router = useRouter();

  return (
    <GuvenliKimlikDogrulamaScreen
      onBack={() => {
        // Geri tuşuna basıldığında doğrudan Raporlarım sekmesine yönlendiriyoruz
        router.replace("/" as any);
      }}
    />
  );
};

export default GuvenliKimlikDogrulamaPage;

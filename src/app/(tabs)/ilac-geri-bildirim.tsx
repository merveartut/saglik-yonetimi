import { IlacGeriBildirimScreen } from "@/features/ilaclar/screens/IlacGeriBildirimScreen";
import { useRouter } from "expo-router";

const IlacGeriBildirimPage = () => {
  const router = useRouter();

  return (
    <IlacGeriBildirimScreen
      onBack={() => {
        // Geri tuşuna basıldığında doğrudan Raporlarım sekmesine yönlendiriyoruz
        router.replace("/(tabs)/ilaclarim" as any);
      }}
    />
  );
};

export default IlacGeriBildirimPage;

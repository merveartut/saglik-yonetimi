import { BilgilendirmeIceriklerimScreen } from "@/features/bilgilendirmeIceriklerim/screens/BilgilendirmeIceriklerimScreen";
import { useRouter } from "expo-router";

const BilgilendirmeIceriklerimPage = () => {
  const router = useRouter();

  return (
    <BilgilendirmeIceriklerimScreen
      onBack={() => {
        // Geri tuşuna basıldığında doğrudan Raporlarım sekmesine yönlendiriyoruz
        router.replace("/" as any);
      }}
    />
  );
};

export default BilgilendirmeIceriklerimPage;

///home/merve/saglik-yonetimi/src/app/(tabs)/biten-raporlu-ilaclar.tsx
import { BitenRaporluIlacScreen } from "@/features/raporlar/screens/BitenRaporluIlacScreen";
import { useRouter } from "expo-router";

const BitenRaporluIlacPage = () => {
  const router = useRouter();

  return (
    <BitenRaporluIlacScreen
      onBack={() => {
        // Geri tuşuna basıldığında doğrudan Raporlarım sekmesine yönlendiriyoruz
        router.replace("/(tabs)/raporlarim" as any);
      }}
    />
  );
};

export default BitenRaporluIlacPage;

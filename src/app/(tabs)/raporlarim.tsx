///home/merve/saglik-yonetimi/src/app/(tabs)/raporlarim.tsx
import { RaporlarimScreen } from "@/features/raporlar/screens/RaporlarimScreen";
import { useRouter } from "expo-router";

const raporlarim = () => {
  const router = useRouter();
  return (
    <RaporlarimScreen
      onBack={() => {
        router.replace("/" as any);
      }}
    />
  );
};

export default raporlarim;

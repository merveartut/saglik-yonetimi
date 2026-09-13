import { HesaplamaAraclariScreen } from "@/features/hesaplamaAraclari/screens/HesaplamaAraclariScreen";
import { useRouter } from "expo-router";

const HesaplamaAraclariPage = () => {
  const router = useRouter();

  return (
    <HesaplamaAraclariScreen
      onBack={() => {
        router.replace("/" as any);
      }}
    />
  );
};

export default HesaplamaAraclariPage;

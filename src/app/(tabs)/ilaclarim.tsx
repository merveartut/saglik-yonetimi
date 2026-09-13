import { IlaclarimScreen } from "@/features/ilaclar/screens/IlaclarimScrenn";
import { useRouter } from "expo-router";

const ilaclarim = () => {
  const router = useRouter();
  return (
    <IlaclarimScreen
      onBack={() => {
        router.replace("/" as any);
      }}
    />
  );
};

export default ilaclarim;

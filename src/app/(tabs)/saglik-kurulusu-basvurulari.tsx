import { SaglikKurulusuBasvurularimScreen } from "@/features/basvurular/screens/SaglikKurulusuBasvurularimScreen";
import { useRouter } from "expo-router";

const SaglikKurulusuBasvurulariPage = () => {
  const router = useRouter();

  return (
    <SaglikKurulusuBasvurularimScreen
      onBack={() => {
        router.replace("/" as any);
      }}
    />
  );
};

export default SaglikKurulusuBasvurulariPage;

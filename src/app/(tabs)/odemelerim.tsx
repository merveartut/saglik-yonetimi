import { OdemelerimScreen } from "@/features/odemeler/screens/OdemelerimScreen";
import { useRouter } from "expo-router";

const odemelerim = () => {
  const router = useRouter();
  return (
    <OdemelerimScreen
      onBack={() => {
        router.replace("/" as any);
      }}
    />
  );
};

export default odemelerim;

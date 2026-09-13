import { TibbiCihazlarimScreen } from "@/features/tibbi-cihazlar/screens/TibbiCihazlarimScreen";
import { useRouter } from "expo-router";

const TibbiCihazlarPage = () => {
  const router = useRouter();

  return (
    <TibbiCihazlarimScreen
      onBack={() => {
        router.replace("/" as any);
      }}
    />
  );
};

export default TibbiCihazlarPage;

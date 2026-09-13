import { SgkyaSorScreen } from "@/features/sgkyaSor/screens/SgkyaSorScreen";
import { useRouter } from "expo-router";

const SgkyaSorPage = () => {
  const router = useRouter();

  return (
    <SgkyaSorScreen
      onBack={() => {
        router.replace("/" as any);
      }}
    />
  );
};

export default SgkyaSorPage;

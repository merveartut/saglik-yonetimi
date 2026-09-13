import { ProfilScreen } from "@/features/profil/screens/ProfilScreen";
import { useRouter } from "expo-router";

const profilim = () => {
  const router = useRouter();
  return (
    <ProfilScreen
      onBack={() => {
        router.replace("/" as any);
      }}
    />
  );
};

export default profilim;

import { KontrolEtmenizGerekenIslemScreen } from "@/features/kontrolGerekenIslem/screens/KontrolGerekenIslemScreen";
import { useRouter } from "expo-router";

const KontrolGerekenIslemPage = () => {
  const router = useRouter();

  return (
    <KontrolEtmenizGerekenIslemScreen
      onBack={() => {
        router.replace("/" as any);
      }}
    />
  );
};

export default KontrolGerekenIslemPage;

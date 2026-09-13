import { RaporluIlacTeminBelgesiScreen } from "@/features/ilaclar/screens/RaporluIlacTeminBelgesiScreen";
import { useRouter } from "expo-router";

const RaporluIlacTeminBelgesiPage = () => {
  const router = useRouter();

  return (
    <RaporluIlacTeminBelgesiScreen
      onBack={() => {
        router.replace("/(tabs)/ilaclarim" as any);
      }}
    />
  );
};

export default RaporluIlacTeminBelgesiPage;

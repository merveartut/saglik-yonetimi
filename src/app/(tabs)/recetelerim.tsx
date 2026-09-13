import { RecetelerimScreen } from "@/features/receteler/screens/RecetelerimScreen";
import { useRouter } from "expo-router";

export default function TabRecetelerScreen() {
  const router = useRouter();
  return (
    <RecetelerimScreen
      onBack={() => {
        router.replace("/" as any);
      }}
    />
  );
}

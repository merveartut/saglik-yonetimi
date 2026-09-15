import { Redirect } from "expo-router";

export default function Index() {
  // Uygulama ilk açıldığında doğrudan login sayfasına yönlendirir
  return <Redirect href="/login" />;
}

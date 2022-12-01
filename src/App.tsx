import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./core/hooks/useCachedResources";
import Navigation from "./navigation";

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default registerRootComponent(App);

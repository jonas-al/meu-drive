import { useFonts } from 'expo-font';
import { TamaguiProvider } from 'tamagui'
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from './src/routes';

import config from './tamagui.config';

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </TamaguiProvider>
  );
}

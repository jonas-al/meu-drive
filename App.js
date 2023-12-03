import { useFonts } from 'expo-font';
import { TamaguiProvider, Theme } from 'tamagui'
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from './src/routes';

import config from './tamagui.config';

export default function App() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name='blue'>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Theme>
    </TamaguiProvider>
  );
}

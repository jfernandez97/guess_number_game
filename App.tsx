import AppLoading from "expo-app-loading";
import GameStart from "./src/screens/GameStart";
import Header from "./src/components/Header";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StartGame from "./src/screens/StartGame";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const boolean = true;

  const [loaded] = useFonts({
    robotoCondensed: require("./assets/fonts/RobotoCondensed-Regular.ttf"),
    robotoCondensedBold: require("./assets/fonts/RobotoCondensed-Bold.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {boolean ? <StartGame /> : <GameStart />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

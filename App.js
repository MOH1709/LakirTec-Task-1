import { StatusBar, SafeAreaView, StyleSheet } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

//------------------------------------------> custom components
import { COLOR } from "./src/theme";
import Navigator from "./src/Router";
import { useEffect, useState } from "react";

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  // load required font before loading app
  useEffect(() => {
    const fetchFonts = async () => {
      await SplashScreen.preventAutoHideAsync();
      let isLoaded = await Font.loadAsync({
        Montserrat: require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
      });

      if (isLoaded === undefined) {
        setIsFontLoaded(true);
        await SplashScreen.hideAsync();
      }
    };

    fetchFonts();
  }, []);

  return isFontLoaded === false ? null : (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={COLOR.BACKGROUND} />
      <Navigator />
    </SafeAreaView>
  );
}

//------------------------------------------> custom styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 20,
    backgroundColor: COLOR.BACKGROUND,
  },
});

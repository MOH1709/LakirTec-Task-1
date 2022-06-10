import { StatusBar, SafeAreaView } from "react-native";

//------------------------------------------> custom components
import Navigator from "./src/Router";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <Navigator />
    </SafeAreaView>
  );
}

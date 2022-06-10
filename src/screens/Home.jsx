import { View, Text, Button } from "react-native";

//------------------------------------------> custom components
import { HomeHeader } from "../components/Home";

export default function Home({ navigation }) {
  return (
    <View>
      <HomeHeader />
    </View>
  );
}

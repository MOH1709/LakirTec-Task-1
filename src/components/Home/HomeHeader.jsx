import { View, Text, StyleSheet } from "react-native";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <Text>HomeHeader</Text>
    </View>
  );
}

//------------------------------------------> custom styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

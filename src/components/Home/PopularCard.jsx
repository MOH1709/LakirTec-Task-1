import { View, Text, StyleSheet } from "react-native";

export default function PopularItem() {
  return (
    <View style={styles.container}>
      <Text>PopularItem</Text>
    </View>
  );
}

//------------------------------------------> custom styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

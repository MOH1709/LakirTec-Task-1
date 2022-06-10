import { View, Text, StyleSheet } from "react-native";

export default function CatergoryItem() {
  return (
    <View style={styles.container}>
      <Text>CatergoryItem</Text>
    </View>
  );
}

//------------------------------------------> custom styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

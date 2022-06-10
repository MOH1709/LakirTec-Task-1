import { View, Text, StyleSheet } from "react-native";

export default function Order() {
  return (
    <View style={styles.container}>
      <Text>Order</Text>
    </View>
  );
}

//------------------------------------------> custom styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

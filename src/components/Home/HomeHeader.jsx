import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          alert("Profile Screen is under Development!!");
        }}
      >
        <Image
          style={styles.profile}
          source={require("../../../assets/images/profile.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert("Menu Screen is under Development!!");
        }}
      >
        <Image source={require("../../../assets/icons/menu.png")} />
      </TouchableOpacity>
    </View>
  );
}

//------------------------------------------> custom styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    paddingRight: 20,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});

import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import { COLOR } from "../../theme";

export default function OrderHeader({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={[styles.backBtn, styles.btn]}
      >
        <Image
          style={{ width: 5.04, height: 8 }}
          source={require("../../../assets/icons/back.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.starBtn, styles.btn]}>
        <Image
          style={{ width: 12, height: 12 }}
          source={require("../../../assets/icons/whitestar.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

//------------------------------------------> custom styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  backBtn: {
    borderColor: "#CDCDCD",
    borderWidth: 2,
  },
  starBtn: {
    backgroundColor: COLOR.PRIMARY,
  },
});

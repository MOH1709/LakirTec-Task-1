import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  LogBox,
} from "react-native";

//------------------------------------------> importing custom components
import { COLOR, SHADOW } from "../../theme";

export default function CatergoryCard({ item, index, onPressHandler }) {
  const [isSelected, setIsSelected] = useState(item.isSelected);
  const { name, img } = item;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        SHADOW,
        { backgroundColor: isSelected ? COLOR.PRIMARY : "white" },
      ]}
      onPress={() => {
        onPressHandler(index, !isSelected);
        setIsSelected(!isSelected);
      }}
    >
      <Image style={styles.icon} source={img} />
      <Text style={styles.name}> {name} </Text>
      <TouchableOpacity
        style={[
          styles.nextButton,
          { backgroundColor: isSelected ? COLOR.BACKGROUND : COLOR.SECONDARY },
        ]}
      >
        <Image
          style={styles.nextIcon}
          source={require("../../../assets/icons/next.png")}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

//------------------------------------------> custom styles
const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 177,
    borderRadius: 20,
    margin: 17,
    alignItems: "center",
  },
  icon: {
    width: 60,
    height: 60,
    marginTop: 24,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
  },
  nextButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    height: 26,
    width: 26,
    borderRadius: 50,
  },
  nextIcon: {
    height: 8,
    width: 5.04,
  },
});

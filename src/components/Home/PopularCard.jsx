import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { COLOR, SHADOW } from "../../theme";

export default function PopularCard({ item, navigation }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("Order", item);
      }}
    >
      <View style={[styles.container, SHADOW]}>
        <View style={styles.contentDiv}>
          {/*  */}
          <View style={styles.towDiv}>
            <Image
              style={{ width: 12, height: 8.5 }}
              source={require("../../../assets/icons/crown.png")}
            />
            <Text style={styles.tow1}>top of the week</Text>
          </View>

          {/*  */}
          <View style={styles.detailDiv}>
            <Text style={styles.d1}>{item.name}</Text>
            <Text style={styles.d2}>{`Weight ${item.weight} gr`}</Text>
          </View>

          {/*  */}
          <View style={styles.bottomLeftDiv}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Order");
              }}
              style={styles.addBtn}
            >
              <Image
                style={{ width: 10, height: 10 }}
                source={require("../../../assets/icons/plus.png")}
              />
            </TouchableOpacity>
            <View style={styles.rating}>
              <Image
                style={{ width: 10, height: 9.63 }}
                source={require("../../../assets/icons/blackstar.png")}
              />
              <Text style={{ fontSize: 12, marginLeft: 5 }}>
                {item.rating || "5.0"}
              </Text>
            </View>
          </View>
        </View>

        {/*  */}
        <View style={styles.imageDiv}>
          <Image style={styles.image} source={item.img} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

//------------------------------------------> custom styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 161,
    borderRadius: 25,
    marginVertical: 20,
    overflow: "hidden",
    backgroundColor: "white",
  },
  contentDiv: {
    flex: 1,
  },
  towDiv: {
    flex: 1,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  tow1: {
    marginLeft: 10,
  },
  d1: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
  d2: {
    fontSize: 12,
    fontWeight: "500",
    color: "#C4C4C4",
    fontFamily: "Montserrat",
  },
  detailDiv: {
    flex: 1,
    marginLeft: 20,
  },
  bottomLeftDiv: {
    flexDirection: "row",
  },
  addBtn: {
    width: 90,
    height: 53,
    alignItems: "center",
    justifyContent: "center",
    borderTopEndRadius: 25,
    backgroundColor: COLOR.PRIMARY,
  },
  rating: {
    marginLeft: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  imageDiv: {
    flex: 1,
  },
  image: {
    width: 210,
    height: 125,
    right: -20,
  },
});

import { useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { OrderHeader } from "../components/Order";
import { COLOR, SHADOW } from "../theme";

export default function Order({ navigation }) {
  const { params } = useRoute();

  return (
    <View style={styles.container}>
      <OrderHeader navigation={navigation} />

      {/*  */}
      <Text style={styles.name}>{params.name}</Text>
      <Text style={styles.price}>${params.price}</Text>

      {/*  */}
      <View style={styles.centerScreen}>
        <View style={styles.detailDiv}>
          <View>
            <Text style={styles.title}>Size</Text>
            <Text style={styles.value}>Medium 14''</Text>
          </View>

          <View>
            <Text style={styles.title}>Crust</Text>
            <Text style={styles.value}>{params.crust}</Text>
          </View>

          <View>
            <Text style={styles.title}>Delivery in</Text>
            <Text style={styles.value}>30 min</Text>
          </View>
        </View>

        <View style={styles.imgDiv}>
          <Image style={{ width: 296, height: 176 }} source={params.img} />
        </View>
      </View>

      {/*  */}
      <Text style={styles.iTitle}>Ingredients</Text>
      <View>
        <FlatList
          data={params.ingredients}
          horizontal
          style={{ marginVertical: 10 }}
          renderItem={({ item }) => {
            return (
              <View style={[styles.ingredientDiv, SHADOW]}>
                <Image style={{ width: 80, height: 80 }} source={item.img} />
              </View>
            );
          }}
        />
      </View>

      {/*  */}
      <View style={styles.orderBtnDiv}>
        <TouchableOpacity
          style={styles.orderBtn}
          onPress={() => {
            alert("order placed successfully");
          }}
        >
          <Text style={{ marginRight: 11 }}>Place an order</Text>
          <Image
            style={{ width: 6.3, height: 10 }}
            source={require("../../assets/icons/next.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

//------------------------------------------> custom styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
  },
  name: {
    width: 250,
    height: 100,
    marginTop: 30,
    overflow: "hidden",
    fontFamily: "Montserrat",
    fontSize: 35,
    fontWeight: "bold",
  },
  price: {
    fontFamily: "Montserrat",
    fontSize: 35,
    marginTop: 20,
    color: COLOR.PRICE,
  },
  centerScreen: {
    width: "100%",
    height: 200,
    flexDirection: "row",
    marginVertical: 30,
  },
  detailDiv: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: "#CDCDCD",
  },
  value: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: "bold",
  },
  imgDiv: {
    flex: 1,
  },
  iTitle: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
  ingredientDiv: {
    width: 100,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#ffffff",
  },
  orderBtnDiv: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 10,
    width: "100%",
    paddingRight: 20,
  },
  orderBtn: {
    width: "100%",
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: COLOR.PRIMARY,
  },
});

import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";

//------------------------------------------> importing test api
import products from "../../API/Products";

//------------------------------------------> custom components
import { COLOR } from "../theme";
import { CatergoryCard, HomeHeader, PopularCard } from "../components/Home";

export default function Home({ navigation }) {
  const [data, setData] = useState(products);

  //------------------------------------------> select category
  const onSelectCategory = (index, isSelected) => {
    products[index].isSelected = isSelected;
    setData(products);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <HomeHeader />

      {/* title bar */}
      <View style={styles.title}>
        <Text style={styles.h1}>Food</Text>
        <Text style={styles.h2}>Delivery</Text>
      </View>

      {/* search bar */}
      <View style={styles.searchInputDiv}>
        <Image
          style={styles.searchIcon}
          source={require("../../assets/icons/search.png")}
        />
        <TextInput style={styles.searchInput} placeholder="Search..." />
      </View>

      {/* category screen */}
      <View style={styles.categoryScreen}>
        <Text style={styles.ch1}>Categories</Text>
        <FlatList
          style={styles.categoryList}
          data={data}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <CatergoryCard
                item={item}
                index={index}
                onPressHandler={onSelectCategory}
              />
            );
          }}
        />
      </View>

      {/* popular screen */}
      <View style={styles.popularScreen}>
        <Text style={styles.ch1}>Popular</Text>
        <FlatList
          style={styles.popularList}
          data={data[0].items}
          renderItem={({ item }) => {
            return <PopularCard item={item} navigation={navigation} />;
          }}
        />
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
  title: {
    marginTop: 30,
  },
  h1: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Montserrat",
  },
  h2: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Montserrat",
  },
  searchInputDiv: {
    alignItems: "center",
    marginTop: 36,
    paddingRight: 20,
    flexDirection: "row",
  },
  searchIcon: {
    width: 16,
    height: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Montserrat",
    marginLeft: 12,
    borderBottomWidth: 2,
    borderColor: "#CDCDCD",
  },
  categoryScreen: {
    marginTop: 30,
  },
  ch1: {
    fontWeight: "700",
    fontFamily: "Montserrat",
  },
  categoryList: {
    marginTop: -2,
  },
  popularScreen: {
    flex: 1,
  },
  popularList: {
    paddingRight: 20,
  },
});

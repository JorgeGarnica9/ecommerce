import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
// import categories from "../../data/categories.json";
import FlatCard from "../../components/FlatCard";
import TextKarlaRegular from "../../components/TextKarlaRegular";
import {useSelector, useDispatch} from "react-redux";
import { setCategorySelected, filterProducts } from "../../features/shop/shopSlice";

const CategoriesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.shopReducer.categories);


  const renderCategoryItem = ({ item }) => (
    <Pressable onPress={() => {
      dispatch(setCategorySelected(item.title));
      dispatch(filterProducts(item.title));
      navigation.navigate("Products");
    }}>
      <FlatCard>
        <View style={styles.categoryContainer}>
          <TextKarlaRegular>{item.title}</TextKarlaRegular>
          <Image width={80} height={40} source={{ uri: item.image }} />
        </View>
      </FlatCard>
    </Pressable>
  );
  return (
    <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});

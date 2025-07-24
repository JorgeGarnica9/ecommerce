import { StyleSheet, View, FlatList, Image, Pressable } from "react-native";
import FlatCard from "../../components/FlatCard";
import TextNova from "../../components/TextNova";
import { useDispatch } from "react-redux";
import {
  setCategorySelected,
  filterProducts,
} from "../../features/shop/shopSlice";
import { useGetCategoriesQuery } from "../../services/shop/shopApi";

const CategoriesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data: categories, isLoading, error } = useGetCategoriesQuery();

  const renderCategoryItem = ({ item }) => (
    <Pressable
      onPress={() => {
        dispatch(setCategorySelected(item.title));
        dispatch(filterProducts(item.title));
        navigation.navigate("Productos");
      }}
    >
      <FlatCard>
        <View style={styles.categoryContainer}>
          <TextNova>{item.title}</TextNova>
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
      alignItems="center"
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
});

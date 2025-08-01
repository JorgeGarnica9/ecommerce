import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { colors } from "../../global/colors";
import { useDispatch } from "react-redux";
import { addItems } from "../../features/cart/cartSlice";
import Toast from "react-native-toast-message";
import Counter from "../../components/Counter";
import { useState } from "react";

const ProductScreen = ({ route }) => {
  const { product } = route.params;
  const { width } = useWindowDimensions();
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.productContainer}>
      <Text style={styles.textBrand}>{product.brand}</Text>
      <Text style={styles.textTitle}>{product.title}</Text>
      <Image
        source={{ uri: product.mainImage }}
        alt={product.title}
        width="100%"
        height={width * 0.7}
        resizeMode="contain"
        borderColor={colors.mediumBlue}
        borderWidth={4}
        style={{ borderRadius: 16 }}
      />
      <Text style={styles.longDescription}>{product.longDescription}</Text>
      <View style={styles.tagsContainer}>
        <View style={styles.tags}>
          <Text style={styles.tagText}>Tags : </Text>
          {product.tags?.map((tag) => (
            <Text key={Math.random()} style={styles.tagText}>
              {tag}
            </Text>
          ))}
        </View>

        {product.discount > 0 && (
          <View style={styles.discount}>
            <Text style={styles.discountText}>-{product.discount}%</Text>
          </View>
        )}
      </View>
      {product.stock <= 0 && <Text style={styles.noStockText}>Sin Stock</Text>}
      <Text style={styles.price}>Precio: ${product.price}</Text>
      <Counter count={quantity} setCount={setQuantity} />
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.95 : 1 },
          styles.addToCartButton,
        ]}
        onPress={() => {
          dispatch(addItems({ product: product, quantity: quantity }));

          Toast.show({
            type: "customToast",
            text1: "Producto agregado al carrito",
            text2: product.title,
            props: {borderColor: colors.neonGreen},
            position: "top",
            visibilityTime: 2000,
          });
        }}
      >
        <Text style={styles.textAddToCart}>Agregar al carrito</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  productContainer: {
    paddingHorizontal: 16,
    marginVertical: 16,
    backgroundColor: colors.darkGrey,
  },
  textBrand: {
    color: colors.darkGrey,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.lightGrey,
  },
  longDescription: {
    fontSize: 16,
    textAlign: "justify",
    paddingVertical: 8,
    color: colors.lightGrey,
  },
  tagsContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  tags: {
    flexDirection: "row",
    gap: 5,

  },
  tagText: {
    fontWeight: "600",
    fontSize: 14,
    color: colors.lightGrey,
  },
  // price: {
  //   fontWeight: "800",
  //   fontSize: 18,
  //   color: colors.lightGrey,
  // },
  discount: {
    backgroundColor: colors.red,
    width: 52,
    height: 52,
    borderRadius: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  discountText: {
    color: colors.white,
    textAlign: "center",
    verticalAlign: "center",
  },
  noStockText: {
    color: colors.red,
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
    alignSelf: "center",
    paddingVertical: 16,
    color: colors.lightGrey,
  },
  addToCartButton: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.blue,
    borderRadius: 16,
    marginVertical: 16,
  },
  textAddToCart: {
    color: colors.lightGrey,
    fontSize: 24,
    textAlign: "center",
  },
});

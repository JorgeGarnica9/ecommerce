import { StyleSheet, Text, View } from "react-native";
import  TextNova  from "../../components/TextNova";
import { colors } from "../../global/colors";

const OrdersScreen = () => {
  return (
    <View style={styles.emptyOrderContainer}>
      <TextNova style={{ ...styles.text }}>
        Aún no se ha generado ninguna orden de compra. Agrega productos a tu carrito y realiza tu compra.
      </TextNova>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  emptyOrderContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.lightGray,
    padding: 16,
  },
  text: {
    color: colors.blue,
    fontSize: 24,
    textAlign: "center",
    marginTop: 40,
  },
});

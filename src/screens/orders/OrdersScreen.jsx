import { StyleSheet, View } from "react-native";
import TextNova from "../../components/TextNova";
import { colors } from "../../global/colors";

const OrdersScreen = () => {
  return (
    <View style={styles.emptyOrderContainer}>
      <TextNova style={{ ...styles.text }}>
        Esta sección se encuentra en desarrollo.
        {"\n"}Pronto podrás ver tus órdenes aquí.
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
    backgroundColor: colors.darkGrey,
    padding: 16,
  },
  text: {
    color: colors.white,
    fontSize: 24,
    textAlign: "center",
    marginTop: 40,
  },
});

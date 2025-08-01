import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../global/colors";

function Counter({ count, setCount }) {
  const sum = () => {
    setCount(count + 1);
  };

  const rest = () => {
    if (count > 2) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable>
        <Icon
          name="remove-circle-outline"
          size={34}
          color={colors.neonRed}
          backgroundColor={colors.black}
          borderRadius={16}
          onPress={rest}
        />
      </Pressable>
      <Text style={styles.texto}>Cantidad: {count}</Text>
      <Pressable>
        <Icon
          name="add-circle-outline"
          size={34}
          color={colors.neonGreen}
          backgroundColor={colors.black}
          borderRadius={16}
          onPress={sum}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  texto: {
    fontWeight: "bold",
    fontSize: 24,
    borderColor: colors.lightGrey,
    borderWidth: 3,
    padding: 6,
    borderRadius: 16,
    color: colors.lightGrey,
  },
});

export default Counter;

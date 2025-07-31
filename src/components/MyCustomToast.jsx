import { View, Text, StyleSheet } from "react-native";
import { colors } from "../global/colors";

export const MyCustomToast = ({ text1, text2, ...rest }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{text1}</Text>
      <Text style={styles.text2}>{text2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    padding: 15,
    borderRadius: 20,
    width: "90%",
    borderLeftColor: colors.neonGreen,
    borderLeftWidth: 15,
    alignItems: "flex-end",
  },
  text1: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
  text2: {
    fontSize: 14,
    color: colors.white,
  },
});

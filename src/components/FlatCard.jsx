import { StyleSheet, View } from "react-native";
import { colors } from "../global/colors";

const FlatCard = ({ children, style }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default FlatCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: colors.lightGrey,
    alignItems: "center",
    paddingVertical: 20,
    marginVertical: 8,
    shadowColor: colors.blue,
    elevation: 10,
    borderColor: colors.lightBlue,
    borderWidth: 1,
    borderRadius: 16,
    width: "100%",
  },
});

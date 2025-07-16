import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";

const Header = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    padding: 10,
    borderBottomWidth: 7,
    borderBottomColor: colors.mediumBlue,
  },
  title: {
    width: "75%",
    fontSize: 34,
    color: colors.white,
    fontFamily: "Audiowide",
    textAlign: "center",
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: colors.neonGreen,
  },
  subtitle: {
    width: "75%",
    fontSize: 14,
    color: colors.white,
    fontFamily: "Audiowide",
    justifyContent: "center",
    textAlign: "right",
  },
});

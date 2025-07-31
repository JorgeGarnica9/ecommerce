import { Text } from "react-native";

const TextNova = ({ children, style, ...props }) => {
  return (
    <Text
      style={[{ fontFamily: "Nova", fontSize: 20, textAlign: "center" }, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default TextNova;

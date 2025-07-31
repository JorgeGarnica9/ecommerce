import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../../screens";
import { colors } from "../../global/colors";

const Stack = createNativeStackNavigator();

export default function CartStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Tu carrito"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: colors.lightGrey },
        headerTintColor: colors.darkGrey,
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="Tu carrito" component={CartScreen} />
    </Stack.Navigator>
  );
}

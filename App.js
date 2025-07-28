import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Header from "./src/components/Header";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import store from "./src/store/index";
import MainNavigator from "./src/navigation/main/MainNavigator";
import Toast from "react-native-toast-message";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Audiowide: require("./assets/fonts/Audiowide-Regular.ttf"),
    Nova: require("./assets/fonts/NovaSquare-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <Header title="FREAKYSTORE" subtitle="by JORGE GARNICA" />
        <StatusBar style="light" />
        <MainNavigator />
        <Toast />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});

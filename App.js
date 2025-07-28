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
import { MyCustomToast } from "./src/components/MyCustomToast";

SplashScreen.preventAutoHideAsync();

const toastConfig = {
  customToast: ({ ...props }) => <MyCustomToast {...props} />,
};

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
        <Toast config={toastConfig}/>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});

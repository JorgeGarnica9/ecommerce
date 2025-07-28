import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import { colors } from "../../global/colors";
import { useEffect, useState } from "react";
import TextNova from "../../components/TextNova";
import { useSignupMutation } from "../../services/auth/authApi";
import Toast from "react-native-toast-message";

const textInputWidth = Dimensions.get("window").width * 0.7;

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [triggerSignup, result] = useSignupMutation();

  const onSubmit = () => {
    triggerSignup({email,password})
  }

  useEffect(() => {
    if (result.status === "fulfilled") {
      navigation.navigate("Login");
      Toast.show({
            type: 'customToast',
            text1: 'Usuario creado con éxito',
            text2: 'Inicia sesión para continuar', 
            position: 'top', 
            visibilityTime: 2000,
          });
    }else if (result.status === "rejected") {
      Toast.show({
            type: 'customToast',
            text1: 'No se ha podido crear el usuario',
            text2: 'Revisa los datos ingresados', 
            position: 'top', 
            visibilityTime: 2000,
          });
    }
  }, [result, navigation]);
  return (
    <View style={styles.gradient}>
      <TextNova style={styles.title}>
        Crea tu usuario para poder disfrutar de todo el contenido exclusivo de
        esta aplicación!
      </TextNova>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor={colors.white}
          placeholder="Ingrese su Email"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor={colors.white}
          placeholder="Ingrese su password"
          style={styles.textInput}
          secureTextEntry
        />
        <TextInput
          onChangeText={(text) => setConfirmPassword(text)}
          placeholderTextColor={colors.white}
          placeholder="Repita su password"
          style={styles.textInput}
          secureTextEntry
        />
      </View>
      <View style={styles.footTextContainer}>
        <Text style={styles.blueText}>¿Ya tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              ...styles.blueText,
              ...styles.underLineText,
              ...styles.strongText,
            }}
          >
            Iniciar sesión
          </Text>
        </Pressable>
      </View>

      <Pressable style={styles.btn} onPress={onSubmit}>
        <Text style={styles.btnText}>Crear cuenta</Text>
      </Pressable>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightGray,
    padding: 16,
  },
  title: {
    color: colors.blue,
    fontFamily: "Audiowide",
    fontSize: 22,
    textAlign: "center",
  },
  inputContainer: {
    gap: 16,
    margin: 16,
    marginTop: 48,
    alignItems: "center",
  },
  textInput: {
    padding: 8,
    paddingLeft: 16,
    borderRadius: 16,
    backgroundColor: colors.darkGray,
    width: textInputWidth,
    color: colors.white,
  },
  footTextContainer: {
    flexDirection: "row",
    gap: 8,
  },
  blueText: {
    color: colors.blue,
    fontSize: 16,
  },
  underLineText: {
    textDecorationLine: "underline",
  },
  strongText: {
    fontWeight: "500",
    fontSize: 16,
  },
  btn: {
    padding: 16,
    paddingHorizontal: 32,
    backgroundColor: colors.darkGray,
    borderRadius: 16,
    marginTop: 32,
  },
  btnText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
  },
//   error: {
//     padding: 16,
//     backgroundColor: colors.red,
//     borderRadius: 8,
//     color: colors.white,
//   },
});

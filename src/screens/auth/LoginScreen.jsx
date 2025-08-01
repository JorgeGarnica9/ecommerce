import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Dimensions,
  Switch,
} from "react-native";
import { colors } from "../../global/colors";
import TextNova from "../../components/TextNova";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../services/auth/authApi";
import { setUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { saveSession, clearSession } from "../../db";
import Toast from "react-native-toast-message";

const textInputWidth = Dimensions.get("window").width * 0.7;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [persistSession, setPersistSession] = useState(false);

  const [triggerLogin, result] = useLoginMutation();

  const dispatch = useDispatch();

  const onsubmit = () => {
    triggerLogin({ email, password });
  };

  useEffect(() => {
    const saveLoginSession = async () => {
      if (result.status === "fulfilled") {
        try {
          const { localId, email } = result.data;
          if (persistSession) {
            await saveSession(localId, email);
          } else {
            await clearSession();
          }
          dispatch(setUser({ localId, email }));
        } catch (error) {
          console.log("Error al guardar sesión:", error);
        }
      } else if (result.status === "rejected") {
        Toast.show({
          type: "customToast",
          text1: "Error al iniciar sesión, intenta nuevamente",
          text2: "Revisa tus datos",
          props: {borderColor: colors.neonRed},
          position: "top",
          visibilityTime: 2000,
        });
      }
    };

    saveLoginSession();
  }, [result]);

  return (
    <View style={styles.container}>
      <TextNova style={styles.title}>
        El contenido de esta aplicación es de uso exclusivo para usuarios
        registrados. Por favor inicia tu sesión o crea tu nuevo perfil de
        usuario.
      </TextNova>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor={colors.white}
          placeholder="Email"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor={colors.white}
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry
        />
      </View>
      <View style={styles.footTextContainer}>
        <Text style={styles.blueText}>¿No tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text
            style={{
              ...styles.blueText,
              ...styles.underLineText,
              ...styles.strongText,
            }}
          >
            Crea una
          </Text>
        </Pressable>
      </View>
      <Pressable style={styles.btn} onPress={onsubmit}>
        <Text style={styles.btnText}>Iniciar sesión</Text>
      </Pressable>
      <View style={styles.rememberMe}>
        <Text style={{ color: colors.darkGray }}>
          ¿Mantener sesión iniciada?
        </Text>
        <Switch
          onValueChange={() => setPersistSession(!persistSession)}
          value={persistSession}
          trackColor={{ false: "#767577", true: colors.lightBlue }}
          thumbColor={persistSession ? colors.blue : colors.darkGrey}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightGrey,
    padding: 16,
  },
  title: {
    color: colors.blue,
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
    backgroundColor: colors.darkGrey,
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
    backgroundColor: colors.darkGrey,
    borderRadius: 16,
    marginTop: 32,
  },
  btnText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
  },
  rememberMe: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});

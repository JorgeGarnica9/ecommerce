import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "../auth/AuthStackNavigator";
import TabNavigator from "../tab/TabNavigator";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfilePictureQuery } from "../../services/user/userApi";
import { setProfilePicture } from "../../features/user/userSlice";
import { initSessionTable, getSession } from "../../db";
import { ActivityIndicator, View } from "react-native";
import { setUser } from "../../features/user/userSlice";
import { colors } from "../../global/colors";

export default function MainNavigator() {
  const userEmail = useSelector((state) => state.userReducer.userEmail);
  const localId = useSelector((state) => state.userReducer.localId);
  const [checkingSession, setCheckingSession] = useState(true);
  const dispatch = useDispatch();
  const { data: profilePicture, isLoading } =
    useGetProfilePictureQuery(localId);

  useEffect(() => {
    const bootstrap = async () => {
      await initSessionTable();
      const session = await getSession();
      if (session) {
        dispatch(setUser({ localId: session.localId, email: session.email }));
      }
      setCheckingSession(false);
    };

    bootstrap();
  }, []);

  useEffect(() => {
    if (profilePicture) {
      dispatch(setProfilePicture(profilePicture.image));
    }
  }, [profilePicture]);

  if (checkingSession) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.blue} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userEmail ? <TabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}

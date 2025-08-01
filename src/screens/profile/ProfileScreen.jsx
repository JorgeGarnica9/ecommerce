import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { colors } from "../../global/colors";
import CameraIcon from "../../components/CameraIcon";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { useSelector, useDispatch } from "react-redux";
import { usePutProfilePictureMutation } from "../../services/user/userApi";
import { setProfilePicture } from "../../features/user/userSlice";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { clearSession } from "../../db";
import { clearUser } from "../../features/user/userSlice";
import TextNova from "../../components/TextNova";

const ProfileScreen = () => {
  const user = useSelector((state) => state.userReducer.userEmail);
  const localId = useSelector((state) => state.userReducer.localId);
  const image = useSelector((state) => state.userReducer.profilePicture);
  const [triggerPutProfilePicture, result] = usePutProfilePictureMutation();
  const [location, setLocation] = useState(null);
  const [locationLoaded, setLocationLoaded] = useState(false);
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
      base64: true,
    });

    if (!result.canceled) {
      const imgBase64 = `data:image/jpeg;base64,${result.assets[0].base64}`;
      dispatch(setProfilePicture(imgBase64));
      triggerPutProfilePicture({ localId: localId, image: imgBase64 });
    }
  };

  useEffect(() => {
    async function getCurrentLocation() {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Error al obtener los permisos");
          setLocationLoaded(true);
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        if (location) {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=${process.env.EXPO_PUBLIC_GMAPS_API_KEY}`
          );
          const data = await response.json();
          setAddress(data.results[0].formatted_address);
          setLocation(location);
        }
      } catch (error) {
        console.log("Error al obtener la ubicación:", error);
      } finally {
        setLocationLoaded(true);
      }
    }

    getCurrentLocation();
  }, []);

  return (
    <ScrollView>
      <View style={styles.profileContainer}>
        <View style={styles.imageProfileContainer}>
          {image ? (
            <Image
              source={{ uri: image }}
              resizeMode="cover"
              style={styles.profileImage}
            />
          ) : (
            <Text style={styles.textProfilePlaceHolder}>
              {user.charAt(0).toUpperCase()}
            </Text>
          )}
          <Pressable
            onPress={pickImage}
            style={({ pressed }) => [
              { opacity: pressed ? 0.9 : 1 },
              styles.cameraIcon,
            ]}
          >
            <CameraIcon />
          </Pressable>
        </View>
        <Text style={styles.profileData}>Email: {user}</Text>
        <Pressable
          style={styles.endSessionBtn}
          onPress={() => {
            clearSession();
            dispatch(clearUser());
          }}
        >
          <TextNova style={{ color: colors.white }}>Cerrar sesión</TextNova>
        </Pressable>
        <View >
          <Text style={styles.titleContainer}>Mi ubicación:</Text>
        </View>
        <View style={styles.mapContainer}>
          {location ? (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                title={"Freakystore"}
              />
            </MapView>
          ) : locationLoaded ? (
            <Text>Hubo un problema al obtener la ubicación</Text>
          ) : (
            <ActivityIndicator />
          )}
        </View>
        <View style={styles.placeDescriptionContainer}>
          <View style={styles.addressContainer}>
            <Text style={styles.titleContainer}>{address || ""}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileContainer: {
    paddingTop: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkGrey,
  },
  imageProfileContainer: {
    width: 128,
    height: 128,
    borderRadius: 128,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  textProfilePlaceHolder: {
    color: colors.white,
    fontSize: 48,
  },
  profileData: {
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: "700",
    color: colors.white,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 128,
  },
  mapContainer: {
    width: "80%",
    height: 240,
    overflow: "hidden",
    elevation: 5,
    marginBottom: 16,
    borderColor: colors.lightBlue,
    borderWidth: 3,
    borderRadius: 16,
  },
  map: {
    height: 240,
  },
  titleContainer: {
    fontWeight: "700",
    color: colors.white,
    gap: 8,
    marginBottom: 8,
  },
  placeDescriptionContainer: {
    flexDirection: "row",
    gap: 16,
    width: "80%",
    marginBottom: 16,
  },
  endSessionBtn: {
    padding: 4,
    paddingHorizontal: 16,
    backgroundColor: colors.darkGrey,
    borderRadius: 16,
    margin: 12,
    borderLeftColor: colors.lightBlue,
    borderLeftWidth: 8,
    borderRightColor: colors.lightBlue,
    borderRightWidth: 8,
    borderTopColor: colors.lightBlue,
    borderTopWidth: 1,
    borderBottomColor: colors.lightBlue,
    borderBottomWidth: 1,
  },
});

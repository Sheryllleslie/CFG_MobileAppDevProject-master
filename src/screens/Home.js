import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import TrackButton from "../components/TrackButton.js";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={styles.img}
            source={require("../../assets/cover.png")}
          ></Image>
          <View
            style={{
              flex: 1,

              alignItems: "center",
              marginTop: 50,
            }}
          >
            <Text style={styles.baseText}>Calorie Tracker</Text>
            <TrackButton ButtonText="Start tracking now!" />
          </View>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#4361EE",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: 'url("../../assets/bg.jpg")',
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#F72585",
    paddingBottom: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  img: {
    width: 420,
    height: 130,
  },
});

import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function Logo() {
  return (
    <View>
      <Image style={styles.img} source={require("../../assets/cover.png")} />
    </View>
  );
}

const styles = StyleSheet.create ({
    img: {
        width: 420,
        maxWidth: '100%',
        height: 130,
    }
})
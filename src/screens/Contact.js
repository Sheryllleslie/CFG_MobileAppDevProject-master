import React from "react";
import { SafeAreaView, useWindowDimensions } from "react-native";
import { WebView } from "react-native-webview";

export default Contact = () => {
  const contentWidth = useWindowDimensions().width;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://fit-lose-it.netlify.app/" }}
        contentWidth={contentWidth}
      />
    </SafeAreaView>
  );
};

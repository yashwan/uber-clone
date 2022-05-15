import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RootComponent from "./sreens/RootComponent";
//import tw from 'twrnc'
import { Provider } from "react-redux";
import { store } from "./Store";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootComponent />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

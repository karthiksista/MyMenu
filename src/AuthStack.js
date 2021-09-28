import React, { useContext, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "./AuthProvider";
import { Center } from "./Center";
import {
  Button,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { FONTS, COLORS } from "../constants/theme";

const Stack = createStackNavigator();

function Login({ navigation }) {
  const { login } = useContext(AuthContext);
  return (
    <View style={styles.home}>
      <View style={styles.landing}>
        <View style={styles.titleFlex}>
          <Text style={styles.logoText1}>My</Text>
          <Text style={styles.logoText2}>Menu</Text>
        </View>

        <View>
          <Image
            style={styles.logo}
            source={require("./images/undraw_online_groceries_a02y.png")}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              login();
            }}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          title="Go To Register"
          style={styles.registerButton}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Register({ navigation }) {
  return (
    <Center>
      <Text>I am Register Screen</Text>
      <Button
        title="Go To Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </Center>
  );
}

export const AuthStack = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerTitle: "Sign Up",
        }}
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    display: "flex",
  },
  home: {
    backgroundColor: "white",
    flex: 1,
    display: "flex",
  },
  button: {
    display: "flex",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    padding: 10,
    width: 300,
    height: 50,
    borderRadius: 20,
  },
  registerButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    padding: 10,
    width: 300,
    height: 50,
    borderRadius: 20,
    marginTop: 25,
  },
  loginText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  logoText1: {
    color: COLORS.primary,
    fontWeight: "900",
    fontSize: 80,
    justifyContent: "center",
  },
  logoText2: {
    color: COLORS.secondary,
    fontWeight: "900",
    fontSize: 80,
    justifyContent: "center",
  },
  titleFlex: {
    display: "flex",
    flexDirection: "row",
  },
  landing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

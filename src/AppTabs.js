import React, { useContext, useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import { Center } from "./Center";
import { Text, Button } from "react-native";
import { HomeStack } from "./HomeStack";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { AuthContext } from "./AuthProvider";
import { COLORS } from "../constants/theme";

const Tabs = createBottomTabNavigator();

function Search() {
  return (
    <Center>
      <Text>Search Screen</Text>
    </Center>
  );
}

export const AppTabs = ({}) => {
  const { logout } = useContext(AuthContext);
  return (
    <SafeAreaProvider>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: COLORS.primary,
          inactiveTintColor: "gray",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
              <AntDesign name="home" size={size} color={color} />;
            } else if (route.name === "Search") {
              iconName = "search";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tabs.Screen name="Home" component={HomeStack} />
        <Tabs.Screen name="Search" component={Search} />
      </Tabs.Navigator>
    </SafeAreaProvider>
  );
};

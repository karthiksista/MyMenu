import React, { useContext, useRef, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Text, View, StyleSheet, ScrollView } from "react-native";

import { Center } from "./Center";
import { AuthContext } from "./AuthProvider";
import { useSelector } from "react-redux";
import Info from "./components/Info";
import Sections from "./components/Sections";
import { COLORS } from "../constants/theme";

const Stack = createStackNavigator();

function Feed({ navigation, route }) {
  const info = useSelector((state) => state.restrauntData.restInfo);
  return (
    <Center>
      <Text> FEED LIST</Text>
      <Button
        title={info.restaurantInfo.name}
        onPress={() => {
          navigation.push("Flats");
        }}
      />
    </Center>
  );
}

function Flats({ navigation, route }) {
  const { restaurantInfo, categorys } = route.params.info;
  return (
    <View style={styles.flatsView}>
      <ScrollView>
        <Info info={restaurantInfo} />
        <Sections data={categorys} />
      </ScrollView>
    </View>
  );
}

export const HomeStack = ({}) => {
  const { logout } = useContext(AuthContext);
  const info = useSelector((state) => state.restrauntData.restInfo);

  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={Feed}
        initialParams={{ name: "sista" }}
        options={{
          headerRight: () => <Button onPress={() => logout()} title="Logout" />,
        }}
      />
      <Stack.Screen name="Flats" component={Flats} initialParams={{ info }} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  verticleLine: {
    marginTop: 10,
    height: 1,
    width: "95%",
    backgroundColor: COLORS.primary,
    marginLeft: 10,
    marginRight: 10,
  },
  flatsView: {
    backgroundColor: "white",
    flex: 1,
  },
});

import React from "react";
import { View, Text, Dimensions } from "react-native";
import { COLORS } from "../../constants/theme";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Sections from "./Sections";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.86 + 40);

const Tab = createMaterialTopTabNavigator();

function MenuTab({ data }) {
  console.log("TABROUTE1111", data);

  return (
    <View
      style={{
        width: SLIDER_WIDTH - 10,
        backgroundColor: COLORS.white,
      }}
    >
      <Sections data={data.categorys} />

      {/* <Sections data={} */}
    </View>
  );
}

function DealsTab() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
      }}
    >
      <Text>Sorry! NO DEALS!</Text>
    </View>
  );
}

export default function TabNav({ data }) {
  //   console.log("TABROUTE", data);

  return (
    <Tab.Navigator
      style={{ display: "flex", height: Dimensions.get("window").height }}
    >
      <Tab.Screen name="Menu" children={() => <MenuTab data={data} />} />
      <Tab.Screen name="Deals" component={DealsTab} />
    </Tab.Navigator>
  );
}

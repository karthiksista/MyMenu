import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { AuthContext } from "./AuthProvider";
import { useSelector } from "react-redux";
import Info from "./components/Info";
import Sections from "./components/Sections";
import { icons, SIZES, COLORS, FONTS } from "../constants";
import { CarouselCards } from "./components/CarouselCards";
import { RestrauntSummaryCard } from "./components/RestrauntSummaryCard";

const Stack = createStackNavigator();

// FEED SCREEN

function Feed({ navigation, route }) {
  const restData = useSelector(
    (state) => state.restrauntData.restInfo.restrauntsArray
  );

  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={styles.featuredRestraunts}> Featured Restraunts</Text>
      <CarouselCards data={restData} navigation={navigation} />
      <Text style={styles.featuredRestraunts}> All Restraunts</Text>
      <RestrauntSummaryCard data={restData} />
    </ScrollView>
  );
}

//Restraunt MEnu Screen

function Flats({ route }) {
  const { restaurantInfo, categorys } = route.params.data;
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
          headerRight: () => (
            <TouchableOpacity onPress={() => logout()}>
              <Image source={icons.user} style={styles.profileHeader} />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View style={styles.titleFlex}>
              <Text style={styles.logoText1}>My</Text>
              <Text style={styles.logoText2}>Menu</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen name="Flats" component={Flats} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  flatsView: {
    backgroundColor: "white",
    flex: 1,
  },
  profileHeader: {
    borderRadius: 1,
    display: "flex",
    width: 30,
    height: 30,
    marginRight: SIZES.padding * 2,
  },
  logoText1: {
    color: COLORS.primary,
    fontWeight: "900",
    fontSize: 25,
    justifyContent: "center",
  },
  logoText2: {
    color: COLORS.secondary,
    fontWeight: "900",
    fontSize: 25,
    justifyContent: "center",
  },
  titleFlex: {
    display: "flex",
    flexDirection: "row",
  },
  featuredRestraunts: {
    fontSize: SIZES.h3,
    fontWeight: "bold",
    paddingLeft: 25,
    paddingTop: 5,
  },
});

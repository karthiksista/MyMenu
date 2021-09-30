import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import ModernHeader from "react-native-modern-header";
import { COLORS } from "../../constants/theme";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.86 + 40);
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Center } from "../Center";
import TabNav from "./TabNav";

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
      }}
    >
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
      }}
    >
      <Text>Settings!</Text>
    </View>
  );
}

export default function Info({ info, categorys, noImage }) {
  const logo = info.imgUrl;
  if (noImage) {
    return (
      <View>
        <View style={styles.containerWithNoImage}>
          <View style={styles.leftContainer}>
            <Text style={styles.paragraph}> {info.name}</Text>
            <Text style={styles.subText}>{info.rating}</Text>
            <Text style={styles.subText}>{info.address}</Text>
            <Text style={styles.subText}>
              Delivery: {info.avg_delivery_time} mins
            </Text>
          </View>
        </View>
        <TabNav data={categorys} />
      </View>
    );
  } else {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.paragraph}> {info.name}</Text>
            <Text style={styles.subText}>{info.rating}</Text>
            <Text style={styles.subText}>{info.address}</Text>
            <Text style={styles.subText}>
              Delivery: {info.avg_delivery_time} mins
            </Text>
          </View>
          <View style={styles.rightContainer}>
            <Image
              style={styles.logo}
              source={{
                uri: logo,
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    height: 125,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: COLORS.primary,
    marginTop: 8,
    borderRadius: 6,
    elevation: 4,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  containerWithNoImage: {
    padding: 8,
    height: 125,
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: COLORS.primary,
    marginTop: 8,
    borderRadius: 6,
    backgroundColor: "white",
  },
  leftContainer: {
    display: "flex",
  },
  rightContainer: {
    display: "flex",
    justifyContent: "center",
  },
  paragraph: {
    paddingBottom: 10,
    fontSize: 18,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  subText: {
    paddingBottom: 10,
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 6,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 0.4,
  },
});

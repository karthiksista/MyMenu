import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ModernHeader from "react-native-modern-header";
import { COLORS } from "../../constants/theme";

export default function Info({ info }) {
  const logo = info.logo;
  return (
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
  );
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
    width: 66,
    height: 58,
    borderRadius: 30,
  },
});

import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

export const RestrauntSummaryCard = ({ data }) => {
  const renderItem = ({ item }) => {
    const cardInfo = item.restaurantData.restaurantInfo;
    return (
      <TouchableOpacity style={{ display: "flex" }}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: cardInfo.imgUrl }} style={styles.image} />
          </View>
          <View style={styles.info}>
            <Text style={styles.infoHeader}>{cardInfo.name}</Text>
            <Text>{cardInfo.cusine}</Text>
            <Text>⭐{cardInfo.rating}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 10,
  },
  imageContainer: {
    display: "flex",
  },
  info: {
    display: "flex",
    marginLeft: 30,
  },
  image: {
    width: 90,
    height: 100,
    borderRadius: 10,
  },
  infoHeader: {
    color: COLORS.black,
    fontSize: SIZES.h4,
    fontWeight: "bold",
  },
});

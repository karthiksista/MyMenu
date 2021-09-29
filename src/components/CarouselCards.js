import React, { useContext, useRef, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { SIZES, COLORS } from "../../constants";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.86);

export class CarouselCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  handleCarouselPress(check, navigation) {
    navigation.push("Flats", {
      data: check,
    });
  }

  _renderItem({ item, index }) {
    const cardInfo = item.restaurantData.restaurantInfo;
    const totalMenu = item.restaurantData;
    return (
      <TouchableOpacity
        style={styles.container}
        key={index}
        activeOpacity={1}
        onPress={() =>
          this.handleCarouselPress(totalMenu, this.props.navigation)
        }
      >
        <Image source={{ uri: cardInfo.imgUrl }} style={styles.image} />
        <Text style={styles.header}>
          {item.restaurantData.restaurantInfo.name}
        </Text>
        <Text style={styles.address}>{cardInfo.cusine}</Text>
        <Text style={styles.rating}>⭐{cardInfo.rating}</Text>
      </TouchableOpacity>
    );
  }
  render() {
    const { data, navigation } = this.props;
    return (
      <View>
        <View>
          <Carousel
            layout={"default"}
            layoutCardOffset={9}
            ref={(ref) => (this.carousel = ref)}
            data={data}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            renderItem={this._renderItem.bind(this)}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>

        <Pagination
          dotsLength={data.length}
          activeDotIndex={this.state.activeIndex}
          carouselRef={(ref) => (this.carousel = ref)}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: COLORS.primary,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.39,
    shadowRadius: 9.65,
    elevation: 7,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
  },
  header: {
    color: COLORS.black,
    fontSize: SIZES.h3,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10,
  },
  address: {
    color: COLORS.darkgray,
    fontSize: SIZES.h4,
    // fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 5,
  },
  rating: {
    color: COLORS.darkgray,
    fontSize: SIZES.h4,
    // fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 5,
  },
});

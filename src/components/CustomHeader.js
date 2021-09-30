import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ReactNativeParallaxHeader from "react-native-parallax-header";
import { COLORS } from "../../constants";
import Info from "./Info";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? (!IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === "ios" ? (!IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  renderNavBar(navigation, restaurantInfo) {
    console.log("NAVY", this.props.restaurantInfo.imgUrl);
    return (
      <View style={styles.navContainer}>
        <View style={styles.statusBar} />
        <View style={styles.navBar}>
          <TouchableOpacity
            style={styles.iconLeft}
            onPress={() => {
              navigation.pop();
            }}
          >
            <MaterialCommunityIcons
              name="chevron-left"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {restaurantInfo.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
            <Text style={{ color: "black" }}>{""}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderContent(restaurantInfo, categorys) {
    return (
      <View style={styles.body}>
        <Info info={restaurantInfo} categorys={categorys} noImage={true} />
      </View>
    );
  }

  title() {
    return (
      <View style={styles.body}>
        <Text style={{ color: "white", fontSize: 25 }}>Parallax Header</Text>
      </View>
    );
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <ReactNativeParallaxHeader
          alwaysShowTitle={false}
          alwaysShowNavBar={false}
          headerMinHeight={HEADER_HEIGHT}
          headerMaxHeight={250}
          extraScrollHeight={20}
          navbarColor={COLORS.secondary}
          titleStyle={styles.titleStyle}
          title={this.title}
          backgroundImage={{ uri: this.props.restaurantInfo.imgUrl }}
          backgroundImageScale={1.2}
          renderNavBar={() =>
            this.renderNavBar(this.props.navigation, this.props.restaurantInfo)
          }
          renderContent={() =>
            this.renderContent(this.props.restaurantInfo, this.props.data)
          }
          containerStyle={styles.container}
          contentContainerStyle={styles.contentContainer}
          innerContainerStyle={styles.container}
          scrollViewProps={{
            onScrollBeginDrag: () => console.log("onScrollBeginDrag"),
            onScrollEndDrag: () => console.log("onScrollEndDrag"),
          }}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
    marginTop: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: "transparent",
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  titleStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  iconLeft: {
    marginBottom: 20,
    backgroundColor: COLORS.white,
    borderRadius: 50,
  },
  iconRight: {
    marginBottom: 20,
  },
});

export default CustomHeader;

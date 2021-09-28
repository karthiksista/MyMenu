import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";

import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";
import { COLORS } from "../../constants/theme";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const SectionHeader = ({ headerText }) => (
  <View>
    <Text style={styles.header}>{headerText}</Text>
  </View>
);
const Separator = () => <View style={styles.separator} />;

function Sections({ data }) {
  const [collapsed, setCollapsed] = useState(false);
  const [multipleSelect, setMultipleSelect] = useState(false);
  const [activeSections, setActiveSections] = useState([]);

  toggleExpanded = (collapsed) => {
    setCollapsed(!collapsed);
  };

  setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.name}</Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        {section.data.map((item) => {
          return (
            <Animatable.Text
              animation={isActive ? "pulse" : undefined}
              key={item.id}
            >
              <View>
                <View style={styles.itemContainer}>
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemTitle}>{item.name}</Text>
                    <Text style={styles.itemDescription}>{item.id}</Text>
                  </View>
                  <View style={styles.pricing}>
                    <Text style={styles.itemPrice}>
                      ₹ {item.subItems[0].price}
                    </Text>
                    <View style={styles.buttonGroup}>
                      <TouchableOpacity
                        style={styles.qtyButton}
                        onPress={() => {}}
                      >
                        <Text style={styles.qtySetters}>-</Text>
                      </TouchableOpacity>
                      <Text>
                        {item.orderedAmount ? item.orderedAmount : "0"}
                      </Text>
                      <TouchableOpacity
                        style={styles.qtyButton}
                        onPress={() => {}}
                      >
                        <Text style={styles.qtySetters}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View>
                  <View style={styles.verticleLine}></View>
                </View>
              </View>
            </Animatable.Text>
          );
        })}
      </Animatable.View>
    );
  };

  return (
    <Accordion
      activeSections={activeSections}
      sections={data}
      touchableComponent={TouchableOpacity}
      expandMultiple={multipleSelect}
      renderHeader={renderHeader}
      renderContent={renderContent}
      duration={400}
      onChange={setSections}
      renderAsFlatList={false}
    />
  );
}

export default Sections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 20,
  },
  header: {
    padding: 10,
    height: 40,
    borderRadius: 6,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 1,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
  },
  active: {
    backgroundColor: "rgba(255,255,255,1)",
    width: "100%",
  },
  inactive: {},
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  selector: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  activeSelector: {
    fontWeight: "bold",
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center",
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
  itemTitle: {
    paddingBottom: 5,
    display: "flex",
    fontWeight: "bold",
  },
  itemDescription: {
    display: "flex",
    paddingBottom: 10,
  },
  itemInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  itemPricing: {
    display: "flex",
  },
  itemPrice: {
    display: "flex",
    color: "green",
    paddingBottom: 10,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
  },
  qtyButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  qtySetters: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "red",
  },
  verticleLine: {
    marginTop: 10,
    height: 1,
    width: "98%",
    backgroundColor: COLORS.primary,
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 30,
  },
});

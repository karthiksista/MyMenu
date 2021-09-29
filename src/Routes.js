import React, { useState, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AsyncStorage, ActivityIndicator } from "react-native";
import { Center } from "./Center";
import { AuthContext } from "./AuthProvider";
import { AppTabs } from "./AppTabs";
import { AuthStack } from "./AuthStack";
import { useDispatch } from "react-redux";
import { setRestrauntInfo } from "./redux/actions/restrauntActions";
import fakeData from "./data.json";

export const Routes = ({}) => {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchProducts = () => {
    dispatch(setRestrauntInfo(fakeData));
  };
  useEffect(() => {
    // check if the user is logged in or not
    AsyncStorage.getItem("user")
      .then((userString) => {
        fetchProducts();
        if (userString) {
          login();
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

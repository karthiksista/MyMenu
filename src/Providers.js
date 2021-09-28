import React from "react";
import { AuthProvider } from "./AuthProvider";
import { Routes } from "./Routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const Providers = ({}) => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

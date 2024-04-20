import React from "react";
import { Tabs, useSegments } from "expo-router";
import { Icon, useTheme } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useLocale } from "@/src/hooks/useLocale";

const _layout = () => {
  const theme = useTheme();
  const locale = useLocale();

  const segment: string[] = useSegments();
  const hide =
    segment.includes("cart") ||
    segment.includes("orderDetail") ||
    segment.includes("account") ||
    segment.includes("about") ||
    segment.includes("changePassword");

  return (
    <Tabs
      initialRouteName="home"
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          display: hide ? "none" : "flex",
          height: hp(7),
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: locale.home,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarLabelStyle: {
            fontSize: hp(1.5),
            fontWeight: "500",
            marginBottom: hp(0.2),
          },
          tabBarIcon: ({ color }) => (
            <Icon source="home" size={wp(6)} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          headerShown: false,
          title: locale.order,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarLabelStyle: {
            fontSize: hp(1.5),
            fontWeight: "500",
            marginBottom: hp(0.2),
          },
          tabBarIcon: ({ color }) => (
            <Icon source="shopping" size={wp(6)} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: locale.profile,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarLabelStyle: {
            fontSize: hp(1.5),
            marginBottom: hp(0.2),
            fontWeight: "500",
          },
          tabBarIcon: ({ color }) => (
            <Icon source="account" size={wp(7)} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

//account

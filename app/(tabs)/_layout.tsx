import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="order" />
      <Tabs.Screen name="account" />
    </Tabs>
  );
};

export default _layout;

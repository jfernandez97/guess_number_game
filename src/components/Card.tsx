import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { Colors } from "../Constants/Colors";
import Input from "./Input";

export default function Card(props: any) {
  return (
    <View style={{ ...props.style, ...style.container }}>{props.children}</View>
  );
}

const style = StyleSheet.create({
  container: {
    elevation: 5,
    shadowColor: "#000",
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});

import { Button, StyleSheet, Text, View } from "react-native";

import Card from "../components/Card";
import { Colors } from "../Constants/Colors";
import React from "react";
import { stylesGeneral } from "../Constants/styles";

export default function GameStart() {
  return (
    <View style={stylesGeneral.containerScreen}>
      <Text style={{ marginTop: 20 }}>The guess of the oponent</Text>
      <Text style={style.number}> 50</Text>
      <Card style={style.containerButtons}>
        <Button title={"Minor"} onPress={() => {}}></Button>
        <Button title={"Mayor"} onPress={() => {}}></Button>
      </Card>
    </View>
  );
}

const style = StyleSheet.create({
  containerButtons: {
    width: "50%",
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  number: {
    color: Colors.primary,
    fontSize: 22,
  },
});

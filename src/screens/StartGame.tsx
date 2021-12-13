import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Card from "../components/Card";
import { Colors } from "../Constants/Colors";
import Input from "../components/Input";
import { stylesGeneral } from "../Constants/styles";

export default function StartGame(props: any) {
  const [value, setValue] = useState("");

  const [confirm, setConfirm] = useState(false);

  const [numberSelect, setNumberSelect] = useState(0);

  const clean = () => {
    setValue("");
  };

  const hanldeConfirm = () => {
    const numberParser = parseInt(value);
    if (numberParser !== NaN || numberParser <= 0 || numberParser > 99) return;
    setConfirm(true);
    setValue("");
  };

  return (
    <View style={stylesGeneral.containerScreen}>
      <Text style={style.title}>Start Game</Text>
      <Card style={style.card1}>
        <Text style={style.title}>Pick a number</Text>
        <Input value={value} setValue={setValue} />
        <View style={style.containerButton}>
          <Button
            title={"Clean"}
            onPress={clean}
            color={Colors.accent}
          ></Button>
          <Button
            title={"Confirm"}
            onPress={hanldeConfirm}
            color={Colors.primary}
          ></Button>
        </View>
      </Card>
      <Card style={style.card2}>
        <Text style={style.title}>Your pick:</Text>
        <Text style={style.textCard2}>27</Text>
        <Button title={"Start game"} onPress={() => {}}></Button>
      </Card>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    marginVertical: 15,
    fontSize: 16,
    fontFamily: "robotoCondensed",
  },
  containerButton: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  card1: {
    width: "80%",
    height: "35%",
  },
  card2: {
    width: "50%",
    height: "30%",
  },
  textCard2: {
    color: Colors.primary,
    margin: 5,
  },
});

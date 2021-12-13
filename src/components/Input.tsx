import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Input(props: any) {
  const [value, setValue] = useState("");
  const handlerInput = (text: string) => {
    props.setValue(text.replace(/[^0-9]/g, ""));
  };

  return (
    <TextInput
      style={style.container}
      value={props.value}
      keyboardType={"numeric"}
      maxLength={2}
      onChangeText={handlerInput}
    />
  );
}

const style = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: "25%",
    height: "15%",
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    textAlign: "center",
  },
});

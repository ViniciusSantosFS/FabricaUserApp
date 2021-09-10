import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input({ ...rest }) {
  return <TextInput style={styles.input} {...rest} />;
}

const styles = StyleSheet.create({
  input: {
    width: "70%",
    paddingHorizontal: 10,
    paddingVertical: 5,

    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 8,
    marginVertical: 10,
  },
});

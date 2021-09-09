import React from "react";
import {
  Modal,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: "center",
    marginTop: 10,
  },

  closeModalContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    width: "70%",
    height: 50,

    borderRadius: 8,
    backgroundColor: "#122253",

    marginTop: 30,
  },

  title: {
    fontSize: 16,
    color: "#FFFFFF",
  },

  image: {
    width: 100,
    height: 100,

    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000EEE",

    marginBottom: 20,
  },
});

export default function PersonModal({
  modalState,
  name,
  uri,
  onPress,
  removePerson,
}) {
  return (
    <Modal visible={modalState} animationType="slide">
      <View style={styles.modalContainer}>
        <Image
          source={{
            uri: uri,
          }}
          style={styles.image}
        />

        <Text>{name}</Text>

        <TouchableOpacity onPress={onPress} style={styles.closeModalContainer}>
          <Text style={styles.title}>Fechar Modal</Text>
          <MaterialCommunityIcons name="close" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={removePerson}
          style={[styles.closeModalContainer, { backgroundColor: "#E66D2E" }]}
        >
          <Text style={styles.title}>Remover Amigo</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

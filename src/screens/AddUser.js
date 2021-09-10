import React, { useState } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";

import Input from "../components/Input";

export default function AddUser({ friends, setFriends }) {
  const [name, setName] = useState("");

  const [age, setAge] = useState("");

  const [image, setImage] = useState(null);

  const handleOpenCamera = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      setImage(result.uri);

      Alert.alert("Imagem adicionada com sucesso");
    } else {
      Alert.alert("Precisamos da permissão para acessar sua biblioteca");
    }
  };

  const handleAddFriend = () => {
    const randomId = Math.random() * (100 - 1) + 1;

    setFriends([
      ...friends,
      { id: String(randomId), name: name, age: age, uri: image },
    ]);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Input
          placeholder="Nome do amigo(a)"
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Idade do amigo(a)"
          keyboardType="numeric"
          onChangeText={(text) => setAge(text)}
        />

        <TouchableOpacity
          onPress={handleOpenCamera}
          style={styles.cameraButtonContainer}
        >
          <MaterialCommunityIcons name="camera" size={32} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleAddFriend}
          style={styles.addButtonContainer}
        >
          <Text style={{ color: "#FFFFFF" }}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  cameraButtonContainer: {
    borderRadius: 50,
    backgroundColor: "#122253",

    padding: 10,
    marginVertical: 10,
  },

  addButtonContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#122253",
    backgroundColor: "#122253",

    padding: 10,
    marginVertical: 20,

    width: "60%",

    alignItems: "center",
    justifyContent: "center",
  },
});

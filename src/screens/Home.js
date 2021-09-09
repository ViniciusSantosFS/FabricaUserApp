import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import PersonModal from "../components/PersonModal";

export default function Home() {
  const navigation = useNavigation();

  const friends = [
    {
      id: "1",
      name: "jose",
      age: "21",
      uri: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "2",
      name: "lucas",
      age: "31",
      uri: "https://uifaces.co/our-content/donated/gPZwCbdS.jpg",
    },
    {
      id: "3",
      name: "maria",
      age: "25",
      uri: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
      id: "4",
      name: "luana",
      age: "40",
      uri: "https://uifaces.co/our-content/donated/3799Ffxy.jpeg",
    },
  ];

  const [modalState, setModalState] = useState(false);
  const [currentPersonId, setCurrentPersonId] = useState(null);
  const [people, setPeople] = useState(friends);

  const isModalVisible = () => {
    setModalState(!modalState);
  };

  const selectId = (id) => {
    setCurrentPersonId(id);
    isModalVisible();
  };

  const removeFriend = () => {
    const newList = people.filter((person) => {
      return person.id !== currentPersonId;
    });

    setPeople(newList);
    isModalVisible();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {people.map((person) => (
          <View key={person.id}>
            <TouchableOpacity
              onPress={() => selectId(person.id)}
              style={styles.imagesContainer}
            >
              <Image source={{ uri: person.uri }} style={styles.image} />
            </TouchableOpacity>

            {currentPersonId === person.id ? (
              <PersonModal
                modalState={modalState}
                name={person.name}
                uri={person.uri}
                onPress={() => isModalVisible()}
                removePerson={() => removeFriend()}
              />
            ) : (
              <></>
            )}
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate("Adicionar")}
        style={styles.navigationIconContainer}
      >
        <MaterialCommunityIcons
          name="arrow-right-bold-circle-outline"
          size={50}
          color="#122253"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagesContainer: {
    margin: 20,
  },

  image: {
    width: 100,
    height: 100,

    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000EEE",

    marginBottom: 20,
  },

  navigationIconContainer: {
    alignSelf: "center",
    marginBottom: "30%",
  },
});

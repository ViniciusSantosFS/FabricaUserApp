import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

import PersonModal from "../components/PersonModal";
import AddUser from "./AddUser";

export default function Home() {
  const [friends, setFriends] = useState([
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
  ]);

  const [modalState, setModalState] = useState(false);
  const [currentPersonId, setCurrentPersonId] = useState(null);

  const isModalVisible = () => {
    setModalState(!modalState);
  };

  const selectId = (id) => {
    setCurrentPersonId(id);
    isModalVisible();
  };

  const removeFriend = () => {
    const newList = friends.filter((person) => {
      return person.id !== currentPersonId;
    });

    setFriends(newList);
    isModalVisible();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {friends.map((person) => (
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

      <AddUser setFriends={setFriends} friends={friends} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
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

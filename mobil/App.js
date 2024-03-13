import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';


export default function App() {
  const host = "http://localhost:8000/"
  const endpoint = "orszagok"
  const url = host + endpoint

  const [orszagok, setOrszagok] = useState([]);

  function getOrszagok() {
    fetch(url)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setOrszagok(result)
    })
  }


  return (
    <View style={styles.container}>
      <Text>Országok</Text>

      <Pressable onPress={getOrszagok}>
        <Text>Lekér</Text>
      </Pressable>

      

      <FlatList 
        data={orszagok}
        renderItem={({item}) => (
        <View style={styles.view}>
          <Text style={styles.text}>Név: {item.nev}, Terület: {item.terulet}km², Népesség: {item.nepesseg}, Főváros: {item.fovaros}</Text>
        </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    borderWidth: 2,
    borderColor: "#008080",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

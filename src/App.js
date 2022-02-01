import React from 'react';
import { FlatList, SafeAreaView, View, StyleSheet, Text } from 'react-native';
import musicData from './music-data.json';
import SongCard from './components/SongCard';

function App(){

  const renderSong = ({item})=> <SongCard  song={item} />
  const renderSeperator = () => <View style={styles.seperator}/>


  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={musicData}
          ItemSeparatorComponent={renderSeperator}
          renderItem={renderSong}
        />
      </View>
    </SafeAreaView>
  )
}



  
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  seperator:{
    borderWidth: 1,
    borderColor: '#e0e0e0',
  }
});

export default App;

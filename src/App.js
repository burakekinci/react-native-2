import React, {useState} from 'react';
import { FlatList, SafeAreaView, View, StyleSheet, Text } from 'react-native';
import musicData from './music-data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';

function App(){

  const [list,setList] = useState(musicData);

  const renderSong = ({item})=> <SongCard  song={item} />
  const renderSeperator = () => <View style={styles.seperator}/>

  const handleSearch = text => {
    const filteredList = musicData.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    })

    setList(filteredList);
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch}/>
        <FlatList
          keyExtractor={(item) => item.id}
          data={list}
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
    backgroundColor: '#cfcfcf',
  },
  seperator:{
    borderWidth: 0.5,
    borderColor: '#9b9b9b',
  }
});

export default App;

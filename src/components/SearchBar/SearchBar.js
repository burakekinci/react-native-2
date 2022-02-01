import React from 'react';
import { View, TextInput  } from 'react-native';
import styles from './SearchBar.style';
import Icon from 'react-native-vector-icons/Feather';


const SearchBar = (props) => {
    return(
        <View style={styles.container}>
            <Icon style={styles.icon} name="search" size={22} color="#fff" light />
            <TextInput
                style={styles.input}
                placeholder='Ara...'
                placeholderTextColor={'white'}
                onChangeText={props.onSearch}
            />
        </View>
    )
}

export default SearchBar;

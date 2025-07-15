import { StyleSheet, Text, TextInput, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../global/colors';

const Search = ({keyword,setKeyword}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput 
      onChangeText={(text) => setKeyword(text)}
      style={styles.searchInput}
      value={keyword}/>
      <Ionicons name="search" size={32} color={colors.darkGrey} />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',  
},
    searchInput: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: colors.lightGrey,
        width: '90%',
        borderRadius: 30,
        paddingHorizontal: 20,
    },
    })
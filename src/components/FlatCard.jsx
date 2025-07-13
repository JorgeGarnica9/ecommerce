import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'

const FlatCard = ({children}) => {
  return (
    <View style={styles.container}>
    {children}
    
    </View>
  )
}

export default FlatCard

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: colors.lightGrey,
        alignItems: 'center',  
        paddingVertical: 24,
        marginVertical: 8,
        shadowColor: colors.black,
        elevation: 8,
    }

})
import { StyleSheet, Text, View } from 'react-native'
import {colors } from '../global/colors'

const Header = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.darkGrey,
    },
    title: {
        fontSize: 24,
        color: colors.white,
        fontFamily: 'PressStart2P-Regular',
    },
     subtitle: {
        fontSize: 16,
        color: colors.white,
        fontFamily: 'PressStart2P-Regular',
    }

})
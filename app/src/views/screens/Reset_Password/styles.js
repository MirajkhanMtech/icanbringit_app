import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import COLORS from '../../../consts/colors';
const STYLES = StyleSheet.create({
    bg: {
        flex: 1,
    },
    mainv: {
        flex: 1,
        // backgroundColor: 'white'
    },
    mainView: {
        flex: 1,
        backgroundColor: '#ADDAFA',
    },
    errors: {
        fontSize: 11,
        fontWeight: "bold",
        color: "red",
        marginTop: 5,
      },
      input:{
        backgroundColor:COLORS.white,
        borderColor:COLORS.white
    },

})

export default STYLES; 
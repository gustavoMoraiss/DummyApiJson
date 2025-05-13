import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    margin: 15,
  },
  imageContainer: {
    borderRadius: 15,
    backgroundColor: colors.lightGray,
  },
  description: {
    color: colors.textDark,
    fontSize: 11,
    marginTop: 5,
    textAlign: 'left',
    fontFamily: 'Inter_18pt-Black',
  },
  value: {
    color: colors.textDark,
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 5,
    textAlign: 'left',
    fontFamily: 'Inter_18pt-Black',
  },
  image: {
    width: '100%',
    height: 203,
    borderRadius: 15,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ratingValue: {
    color: colors.textDark,
    fontSize: 15,
    fontWeight: 'bold',
  },
  ratingDescription: {
    color: colors.textGray,
    fontSize: 11,
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

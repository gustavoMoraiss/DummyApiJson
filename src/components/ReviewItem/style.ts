import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  heading: {
    color: colors.textDark,
    fontSize: 15,
    alignItems: 'flex-start',
  },
  subHeading: {
    color: colors.textGray,
    fontSize: 11,
    alignItems: 'flex-start',
    marginTop: 7,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;

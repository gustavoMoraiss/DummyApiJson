import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
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
  dateContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
    marginTop: 7,
  },
});

export default styles;

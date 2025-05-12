import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBackground: {
    borderRadius: 24,
    backgroundColor: colors.lightGray,
    alignContent: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    alignItems: 'center',
  },
});

export default styles;

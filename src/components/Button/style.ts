import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.textGray,
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    color: colors.lightGray,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  title: {
    fontSize: 28,
    marginTop: 8,
    fontWeight: 'bold',
    color: colors.textDark,
  },
});

export default styles;

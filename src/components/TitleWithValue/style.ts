import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  title: {
    fontSize: theme.fonts.sizes.xxl,
    marginTop: 8,
    fontFamily: theme.fonts.primary.bold,
    color: theme.colors.primary,
  },
}));

export default stylesheet;

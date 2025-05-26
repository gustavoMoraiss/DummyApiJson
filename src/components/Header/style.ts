import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    color: theme.colors.primary,
    fontFamily: theme.fonts.primary.bold,
  },
  subTitle: {
    fontSize: theme.fonts.sizes.sm,
    color: colors.textGray,
    marginTop: 5,
    fontFamily: theme.fonts.primary.bold,
  },
}));

export default stylesheet;

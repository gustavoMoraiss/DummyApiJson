import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.colors.shape,
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
  },
  title: {
    fontSize: theme.fonts.sizes.base,
    color: theme.colors.primary,
  },
}));

export default stylesheet;

import {StyleSheet} from 'react-native';
import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    height: '100%',
    backgroundColor: theme.colors.background,
  },
}));

export default stylesheet;

import {StyleSheet} from 'react-native';
import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: theme.colors.background,
  },
  icon: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
}));

export default stylesheet;

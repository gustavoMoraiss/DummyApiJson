import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginHorizontal: 20,
    height: '100%',
  },
  title: {
    fontSize: theme.fonts.sizes.base,
    color: theme.colors.text,
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme.colors.shape,
    borderRadius: 15,
    padding: 20,
    width: ' 100%',
    marginTop: 20,
  },
}));

export default stylesheet;

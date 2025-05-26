import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  iconBackground: {
    borderRadius: 24,
    backgroundColor: theme.colors.shape,
    alignContent: 'center',
    justifyContent: 'center',
    width: 45,
    marginLeft: 20,
    height: 45,
    alignItems: 'center',
    marginTop: 45,
  },
}));

export default stylesheet;

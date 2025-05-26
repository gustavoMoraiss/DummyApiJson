import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBackground: {
    borderRadius: 24,
    backgroundColor: theme.colors.shape,
    alignContent: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    alignItems: 'center',
  },
}));

export default stylesheet;

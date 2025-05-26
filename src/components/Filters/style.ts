import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {createStyleSheet} from 'react-native-unistyles';

const stylhesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 18,
  },
  button: {
    padding: 8,
    backgroundColor: theme.colors.shape,
    paddingVertical: 16,
    borderRadius: 12,
    marginLeft: 10,
  },
  textButton: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.primary.medium,
    fontSize: theme.fonts.sizes.sm,
  },
}));

export default stylhesheet;

import colors from '../../constants/colors';
import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  categoryHeading: {
    marginTop: 20,
    marginBottom: 15,
    color: theme.colors.primary,
    fontSize: theme.fonts.sizes.base,
    fontFamily: theme.fonts.primary.medium,
  },
  iconBackground: {
    borderRadius: 24,
    backgroundColor: theme.colors.background,
    alignContent: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    alignItems: 'center',
  },
}));

export default stylesheet;

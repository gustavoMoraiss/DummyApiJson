import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  item: {
    fontSize: theme.fonts.sizes.sm,
    textAlign: 'center',
    color: theme.colors.primary,
    justifyContent: 'center',
    fontFamily: theme.fonts.primary.medium,
  },
  selectedItem: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.primary.medium,
    fontSize: theme.fonts.sizes.sm,
  },
  itemContainer: {
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedItemContainer: {
    padding: 8,
    backgroundColor: theme.colors.shape,
    width: 94,
    height: 50,
    borderRadius: 12,
  },
}));

export default stylesheet;

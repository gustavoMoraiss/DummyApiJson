import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ratingValue: {
    color: theme.colors.primary,
    fontSize: theme.fonts.sizes.sm,
    fontFamily: theme.fonts.primary.bold,
  },
  ratingDescription: {
    color: theme.colors.text,
    fontSize: theme.fonts.sizes.xxs,
    alignContent: 'center',
    alignItems: 'center',
  },
}));

export default stylesheet;

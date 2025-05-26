import colors from '../../constants/colors';
import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    marginTop: 15,
  },
  heading: {
    color: theme.colors.primary,
    fontSize: theme.fonts.sizes.sm,
    alignItems: 'flex-start',
  },
  subHeading: {
    color: theme.colors.text,
    fontSize: theme.fonts.sizes.xxs,
    alignItems: 'flex-start',
    marginTop: 7,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
    marginTop: 7,
  },
}));

export default stylesheet;

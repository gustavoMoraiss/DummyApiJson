import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  footer: {
    borderRadius: 15,
    marginTop: 20,
    marginRight: 16,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  miniImage: {
    width: 77,
    height: 77,
    borderRadius: 10,
    marginRight: 9,
  },
  moreImagesContainer: {
    backgroundColor: theme.colors.text,
    width: 77,
    height: 77,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreImages: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.primary.bold,
    fontSize: theme.fonts.sizes.xxl,
  },
}));

export default stylesheet;

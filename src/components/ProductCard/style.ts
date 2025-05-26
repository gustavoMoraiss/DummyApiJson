import {Dimensions} from 'react-native';
import {createStyleSheet} from 'react-native-unistyles';

const {width} = Dimensions.get('window');

const stylesheet = createStyleSheet(theme => ({
  container: {
    width: width * 0.4,
    margin: 15,
  },
  imageContainer: {
    borderRadius: 15,
    backgroundColor: theme.colors.shape,
  },
  description: {
    color: theme.colors.primary,
    fontSize: theme.fonts.sizes.xxs,
    marginTop: 5,
    textAlign: 'left',
    fontFamily: theme.fonts.primary.medium,
  },
  value: {
    color: theme.colors.primary,
    fontSize: theme.fonts.sizes.xs,
    marginTop: 5,
    textAlign: 'left',
    fontFamily: theme.fonts.primary.semi_bold,
  },
  image: {
    width: '100%',
    height: 293,
    borderRadius: 15,
  },
}));

export default stylesheet;

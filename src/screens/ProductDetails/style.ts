import {Dimensions, StyleSheet} from 'react-native';
import {createStyleSheet} from 'react-native-unistyles';

const {height} = Dimensions.get('window');

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    paddingBottom: 30,
    backgroundColor: theme.colors.background,
  },
  smallTitle: {
    fontSize: theme.fonts.sizes.sm,
    color: theme.colors.text,
  },
  mainImage: {
    width: '100%',
    height: height / 2,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.shape,
  },
  detailsContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  title: {
    color: theme.colors.primary,
    fontSize: theme.fonts.sizes.base,
    fontFamily: theme.fonts.primary.bold,
  },
  description: {
    marginTop: 10,
    color: theme.colors.text,
    fontSize: theme.fonts.sizes.sm,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  categoryTitle: {
    fontSize: theme.fonts.sizes.xxl,
    marginTop: 8,
    fontFamily: theme.fonts.primary.bold,
    color: theme.colors.primary,
  },
}));

export default stylesheet;

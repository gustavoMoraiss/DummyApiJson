import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
  },
  smallTitle: {
    fontSize: 15,
    color: colors.textGray,
  },
  mainImage: {
    width: '100%',
    height: height / 2,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  detailsContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  title: {
    color: colors.textDark,
    fontSize: 17,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    color: colors.textGray,
    fontSize: 15,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  categoryTitle: {
    fontSize: 28,
    marginTop: 8,
    fontWeight: 'bold',
    color: colors.textDark,
  },
});

export default styles;

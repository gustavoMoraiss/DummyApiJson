import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  smallTitle: {
    fontSize: 15,
    color: colors.textGray,
    marginTop: 15,
    fontFamily: 'Inter_18pt-Black',
  },
  mainImage: {
    width: '100%',
    height: height / 2,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsContainer: {
    marginHorizontal: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    backgroundColor: 'rgba( 256, 256, 256, 0.35)',
    marginTop: 20,
  },
  miniImage: {
    width: 77,
    height: 77,
    borderRadius: 10,
  },
  moreImagesContainer: {
    backgroundColor: 'rgba(0,0,0,0.38)',
    width: 77,
    height: 77,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreImages: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;

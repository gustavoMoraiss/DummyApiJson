import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  footer: {
    borderRadius: 15,
    backgroundColor: 'rgba( 256, 256, 256, 0.35)',
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

import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginHorizontal: 20,
    height: '100%',
  },
  title: {
    fontSize: 17,
    color: colors.textGray,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.mediumGray,
    borderRadius: 15,
    padding: 20,
    width: ' 100%',
    marginTop: 20,
  },
});

export default styles;

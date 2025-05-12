import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textDark,
  },
  subTitle: {
    fontSize: 15,
    color: colors.textGray,
    marginTop: 5,
  },
});

export default styles;

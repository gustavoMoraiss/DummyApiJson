import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    color: colors.textDark,
    fontFamily: 'inter_bold',
  },
  subTitle: {
    fontSize: 15,
    color: colors.textGray,
    marginTop: 5,
    fontFamily: 'inter_bold',
  },
});

export default styles;

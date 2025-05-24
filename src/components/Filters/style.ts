import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 18,
  },
  button: {
    padding: 8,
    backgroundColor: colors.lightGray,
    paddingVertical: 16,
    borderRadius: 12,
    marginLeft: 10,
  },
  textButton: {
    color: colors.textDark,
    fontFamily: 'inter_medium',
    fontSize: 15,
  },
});

export default styles;

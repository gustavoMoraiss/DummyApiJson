import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  item: {
    fontSize: 13,
    textAlign: 'center',
    color: colors.textDark,
    justifyContent: 'center',
  },
  selectedItem: {
    color: colors.textDark,
  },
  itemContainer: {
    marginVertical: 14,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedItemContainer: {
    padding: 8,
    backgroundColor: colors.lightGray,
    width: 94,
    height: 50,
    borderRadius: 12,
  },
  flatList: {},
});

export default styles;

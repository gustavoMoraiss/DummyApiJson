import React, {FC} from 'react';
import {FlatList, Text, Touchable, TouchableOpacity} from 'react-native';
import styles from './style';

interface Props {
  categories: string[];
  selectedCategory: string;
  onCategoryPress(item: string): void;
}

const Categories: FC<Props> = props => {
  return (
    <FlatList
      horizontal
      keyExtractor={item => String(item)}
      showsHorizontalScrollIndicator={false}
      data={props.categories}
      renderItem={({item, index}) => {
        const selected = props.selectedCategory === item;
        return (
          <TouchableOpacity
            onPress={() => props.onCategoryPress(item)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
            ]}>
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default React.memo(Categories);

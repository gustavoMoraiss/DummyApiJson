import React, {FC} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './style';

interface Props {
  categories: string[];
  selectedCategory: string;
  onCategoryPress(item: string): void;
}

const Categories: FC<Props> = ({
  categories,
  selectedCategory,
  onCategoryPress,
}) => {
  return (
    <FlatList
      horizontal
      keyExtractor={item => String(item)}
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({item, index}) => {
        const selected = selectedCategory === item;
        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
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

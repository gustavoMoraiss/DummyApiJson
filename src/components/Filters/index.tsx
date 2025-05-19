import React, {FC} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

interface Props {
  onFilterByRatingClick(): void;
  onFilterByPriceClick(): void;
}

const Filters: FC<Props> = ({onFilterByPriceClick, onFilterByRatingClick}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onFilterByRatingClick()}>
        <Text style={styles.textButton}>Filter by rating</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onFilterByPriceClick()}>
        <Text style={styles.textButton}>Filter by price</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Filters);

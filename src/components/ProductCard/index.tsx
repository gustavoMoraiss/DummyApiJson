import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {useProducts} from '../../hooks/query';

interface Props {
  imageSrc: string;
  title: string;
  price: string;
  onPress(): void;
}

const ProductCard: FC<Props> = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      hitSlop={8}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: props.imageSrc}} />
      </View>
      <Text style={styles.description}>{props.title}</Text>
      <Text style={styles.value}>{props.price}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(ProductCard);

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

const ProductCard: FC<Props> = ({onPress, imageSrc, title, price}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} hitSlop={8}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: imageSrc}} />
      </View>
      <Text style={styles.description}>{title}</Text>
      <Text style={styles.value}>{price}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(ProductCard);

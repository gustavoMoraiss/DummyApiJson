import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

interface Props {
  imageSrc: string;
  title: string;
  price: string;
  onPress(): void;
}

const ProductCard: FC<Props> = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={props.onPress}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: props.imageSrc}} />
      </View>
      <Text style={styles.description}>{props.title}</Text>
      <Text style={styles.value}>{`$${props.price}`}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(ProductCard);

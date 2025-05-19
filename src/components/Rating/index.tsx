import Icon from '@react-native-vector-icons/ionicons';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {formatDecimal} from '../../utils/format';

interface Props {
  rate: number;
  maxStars?: number;
}

const Rating: FC<Props> = ({rate, maxStars = 5}) => {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.ratingValue}>{formatDecimal(rate)}</Text>
        <Text style={styles.ratingDescription}> rating</Text>
      </View>
      <View style={[styles.row, {marginTop: 5}]}>
        {[...Array(fullStars)].map((_, i) => (
          <Icon name="star" size={13} color="#FF981F" />
        ))}
        {hasHalfStar && <Icon name="star-half-outline" size={13} />}
        {[...Array(emptyStars)].map((_, i) => (
          <Icon name="star-outline" size={13} />
        ))}
      </View>
    </View>
  );
};

export default React.memo(Rating);

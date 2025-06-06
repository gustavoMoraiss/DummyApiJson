import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {formatDecimal} from '../../utils/format';
import Icon from '@react-native-vector-icons/ionicons';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './style';

interface Props {
  rate: number;
  maxStars?: number;
}

const Rating: FC<Props> = ({rate, maxStars = 5}) => {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  const {styles} = useStyles(stylesheet);

  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.ratingValue}>{formatDecimal(rate)}</Text>
        <Text style={styles.ratingDescription}> rating</Text>
      </View>
      <View style={[styles.row, {marginTop: 5}]}>
        {[...Array(fullStars)].map((_, i) => (
          <Icon key={`full-${i}`} name="star" size={13} color="#FF981F" />
        ))}
        {hasHalfStar && (
          <Icon key="half" name="star-half-outline" size={13} color="#FF981F" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Icon
            key={`empty-${i}`}
            name="star-outline"
            size={13}
            color="#FF981F"
          />
        ))}
      </View>
    </View>
  );
};

export default React.memo(Rating);

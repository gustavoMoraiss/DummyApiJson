import React, {FC} from 'react';
import {Review} from '../../service/getAllProductsService';
import {Text, View} from 'react-native';
import Header from '../Header';
import styles from './style';
import {formatDateToReadable} from '../../utils/format';
import Rating from '../Rating';
import Icon from '@react-native-vector-icons/ionicons';
import colors from '../../constants/colors';

interface Props {
  review: Review;
}

const ReviewItem: FC<Props> = props => {
  const {rating, comment, date, reviewerName} = props.review;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.heading}>{reviewerName}</Text>
          <View style={styles.dateContainer}>
            <Icon name="time-outline" size={13} color={colors.textGray} />
            <Text style={[styles.subHeading, {fontSize: 15, marginTop: 0}]}>
              {formatDateToReadable(date)}
            </Text>
          </View>
        </View>
        <Rating rate={rating} />
      </View>
      <Text style={[styles.subHeading, {fontSize: 15, marginTop: 14}]}>
        {comment}
      </Text>
    </View>
  );
};

export default React.memo(ReviewItem);

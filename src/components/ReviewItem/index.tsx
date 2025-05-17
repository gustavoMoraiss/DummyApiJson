import React, {FC} from 'react';
import {Review} from '../../service/getAllProductsService';
import {Text, View} from 'react-native';
import Header from '../Header';
import styles from './style';
import {formatDateToReadable} from '../../utils/format';
import Rating from '../Rating';

interface Props {
  review: Review;
}

const ReviewItem: FC<Props> = props => {
  const {rating, comment, date, reviewerName} = props.review;
  return (
    <View>
      <View style={styles.row}>
        <Header
          title={reviewerName}
          subTitle={formatDateToReadable(date)}
          headingStyle={styles.heading}
          subHeadingStyle={styles.subHeading}
        />
        <Rating rate={rating} />
      </View>
      <Text style={[styles.subHeading, {fontSize: 15, marginTop: 15}]}>
        {comment}
      </Text>
    </View>
  );
};

export default React.memo(ReviewItem);

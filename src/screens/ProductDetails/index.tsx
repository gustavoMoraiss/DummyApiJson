import React, {FC} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './style';
import AppBar from '../../components/AppBar';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeParams} from '../../@types/navigation';
import ImagePreview from '../../components/ImagePreview';
import {formatUSD} from '../../utils/format';
import {Review} from '../../service/getAllProductsService';
import ReviewItem from '../../components/ReviewItem';
import TitleWithValue from '../../components/TitleWithValue';
import Header from '../../components/Header';
import Rating from '../../components/Rating';
import BackButton from '../../components/BackButton';

type Props = NativeStackScreenProps<HomeParams, 'ProductDetails'>;

const ProductDetails: FC<Props> = ({route, navigation}) => {
  const {images, category, rating, price, title, description, reviews} =
    route.params.itemProduct;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.mainImage}
          imageStyle={{borderRadius: 20}}
          source={{uri: images[0]}}>
          <BackButton onPress={() => navigation.goBack()} />
        </ImageBackground>
        <View style={styles.detailsContainer}>
          <View style={styles.categoryContainer}>
            <Text style={styles.smallTitle}>{category}</Text>
            <Rating rate={rating} />
          </View>
          <TitleWithValue
            title={title}
            value={formatUSD(price)}
            style={{fontSize: 22}}
          />
          <ImagePreview
            images={images}
            onImagePreviewPress={() => console.log()}
          />
          <Header
            title="Description"
            subTitle={description}
            headingStyle={styles.title}
            subHeadingStyle={styles.description}
          />
          <Text style={[styles.title, {marginTop: 15}]}>Reviews</Text>
          {reviews.map((review, index) => (
            <ReviewItem review={review} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);

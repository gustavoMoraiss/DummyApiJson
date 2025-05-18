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

type Props = NativeStackScreenProps<HomeParams, 'ProductDetails'>;

const ProductDetails: FC<Props> = ({route}) => {
  const {itemProduct} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.mainImage}
          imageStyle={{borderRadius: 20}}
          source={{uri: itemProduct.images[0]}}></ImageBackground>
        <View style={styles.detailsContainer}>
          <View style={styles.categoryContainer}>
            <Text style={styles.smallTitle}>{itemProduct.category}</Text>
            <Rating rate={itemProduct.rating} />
          </View>
          <TitleWithValue
            title={itemProduct.title}
            value={formatUSD(itemProduct.price)}
            style={{fontSize: 22}}
          />
          <ImagePreview
            images={itemProduct.images}
            onImagePreviewPress={() => console.log()}
          />
          <Header
            title="Description"
            subTitle={itemProduct.description}
            headingStyle={styles.title}
            subHeadingStyle={styles.description}
          />
          <Text style={[styles.title, {marginTop: 15}]}>Reviews</Text>
          <FlatList
            data={itemProduct.reviews}
            ListEmptyComponent={<Text>No reviews available</Text>}
            style={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
            keyExtractor={(review: Review) => review.reviewerName}
            renderItem={({item}) => <ReviewItem review={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);

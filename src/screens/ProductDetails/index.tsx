import React, {FC} from 'react';
import {
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
import TitleWithValue from '../../components/ProductTitle';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeParams} from '../../@types/navigation';
import ImagePreview from '../../components/ImagePreview';
import {formatUSD} from '../../utils/format';
import {Review} from '../../service/getAllProductsService';
import ReviewItem from '../../components/ReviewItem';

type Props = NativeStackScreenProps<HomeParams, 'ProductDetails'>;

const ProductDetails: FC<Props> = ({route}) => {
  const {itemProduct} = route.params;
  const slicedImages = itemProduct?.images?.length
    ? itemProduct?.images?.slice(0, itemProduct?.images?.length - 1)
    : [];
  const diffImages = itemProduct?.images?.length - slicedImages?.length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.mainImage}
          imageStyle={{borderRadius: 20}}
          source={{uri: itemProduct.images[0]}}>
          <AppBar />
        </ImageBackground>
        <View style={styles.detailsContainer}>
          <TitleWithValue
            title={itemProduct.title}
            value={formatUSD(itemProduct.price)}
            style={styles.smallTitle}
          />
          <TitleWithValue
            title={itemProduct.category}
            value={`${itemProduct.rating.toString()}/5`}
          />
          <ImagePreview
            images={slicedImages}
            diffImages={diffImages}
            onImagePreviewPress={() => console.log()}
          />
          <Text style={styles.title}>Description</Text>
          <Text style={styles.description}>{itemProduct.description}</Text>
          <Text style={styles.title}>Reviews</Text>
          <FlatList
            data={itemProduct.reviews}
            ListEmptyComponent={<Text>No reviews available</Text>}
            style={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
            keyExtractor={(review: Review) => review.reviewerName}
            renderItem={({item}) => <ReviewItem review={item} />}
          />
          <TitleWithValue
            title="Total Price"
            value={formatUSD(itemProduct.price)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);

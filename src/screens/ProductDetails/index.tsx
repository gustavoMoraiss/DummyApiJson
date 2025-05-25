import React, {FC} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeParams} from '../../@types/navigation';
import ImagePreview from '../../components/ImagePreview';
import {formatUSD} from '../../utils/format';
import ReviewItem from '../../components/ReviewItem';
import TitleWithValue from '../../components/TitleWithValue';
import Header from '../../components/Header';
import Rating from '../../components/Rating';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import CalendarModule, {
  createCalendarEvent,
} from '../../modules/CalendarModule';
import {Alert} from 'react-native';

type Props = NativeStackScreenProps<HomeParams, 'ProductDetails'>;

const ProductDetails: FC<Props> = ({route, navigation}) => {
  const {
    images,
    category,
    rating,
    price,
    title,
    description,
    reviews,
    stock,
    thumbnail,
  } = route.params.itemProduct;

  const handleCreateEvent = async () => {
    // try {
    //   const eventId = await createCalendarEvent({
    //     title: 'Reunião Importante',
    //     description: 'Discussão sobre roadmap',
    //     location: 'Google Meet',
    //     startDate: '2025-06-01T14:00:00.000Z',
    //     endDate: '2025-06-01T15:00:00.000Z',
    //   });
    //   console.log('Evento criado com ID:', eventId);
    //   Alert.alert('Evento criado', `ID do evento: ${eventId}`);
    // } catch (error: any) {
    //   Alert.alert('Erro', error.message || 'Erro ao criar evento');
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.mainImage}
          imageStyle={{borderRadius: 20}}
          source={{uri: thumbnail}}>
          <BackButton onPress={() => navigation.goBack()} />
        </ImageBackground>
        <View style={styles.detailsContainer}>
          <TitleWithValue
            title="stock availability."
            value={stock.toString()}
            style={styles.smallTitle}
          />
          <View style={styles.categoryContainer}>
            <Text style={styles.smallTitle}>{`Category: ${category}`}</Text>
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
          <Button
            style={{marginTop: 24}}
            title="Schedule this Buy"
            onPress={handleCreateEvent}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);

import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import AppBar from '../../components/AppBar';
import Header from '../../components/Header';
import {getAllCategories} from '../../api/domain/getAllCategories';
import Categories from '../../components/Categories';
import ProductCard from '../../components/ProductCard';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeParams} from '../../@types/navigation';
import {formatUSD} from '../../utils/format';
import styles from './style';
import {useProducts} from '../../hooks/query';
import Loader from '../../components/Loader';
import Filters from '../../components/Filters';
import {Product} from '../../api/domain/product';
import TryAgain from '../../components/TryAgain';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './style';

const All = 'All';

const Home = () => {
  const {data = [], isLoading, error, refetch, isFetching} = useProducts();

  const [currentCategory, setCurrentCategory] = useState<string>(All);
  const [productList, setProductList] = useState<Product[]>(data);

  const navigation = useNavigation<NavigationProp<HomeParams>>();

  const {styles} = useStyles(stylesheet);

  useEffect(() => {
    if (currentCategory === All) {
      setProductList(data);
    } else {
      const filtered = data.filter(item => item.category === currentCategory);
      setProductList(filtered);
    }
  }, [currentCategory, data]);

  const sortByPricing = () => {
    const sorted = [...productList].sort((a, b) => b.price - a.price);
    setProductList(sorted);
  };

  const sortByRating = () => {
    const sorted = [...productList].sort((a, b) => b.rating - a.rating);
    setProductList(sorted);
  };

  if (isLoading || isFetching) return <Loader />;
  if (error)
    return (
      <TryAgain
        tryAgainText="Error loading products"
        onTryAgainButtonClick={() => refetch()}
      />
    );

  return <Loader />;
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <FlatList
  //       data={productList}
  //       ListEmptyComponent={
  //         <TouchableOpacity onPress={() => console.log(data)}>
  //           <Text>No item found</Text>
  //         </TouchableOpacity>
  //       }
  //       numColumns={2}
  //       style={{flexGrow: 1}}
  //       showsVerticalScrollIndicator={false}
  //       ListHeaderComponent={
  //         <>
  //           <AppBar />
  //           <Header title="Hello" subTitle="Welcome to Laza." />
  //           <Text style={styles.categoryHeading}>Choose Category</Text>
  //           <Categories
  //             selectedCategory={currentCategory}
  //             onCategoryPress={setCurrentCategory}
  //             categories={[All, ...getAllCategories]}
  //           />
  //           <Filters
  //             onFilterByPriceClick={sortByPricing}
  //             onFilterByRatingClick={sortByRating}
  //           />
  //         </>
  //       }
  //       keyExtractor={product => String(product.id)}
  //       renderItem={({item}) => (
  //         <ProductCard
  //           title={item.title}
  //           price={formatUSD(item.price)}
  //           imageSrc={item.thumbnail}
  //           onPress={() => {
  //             navigation.navigate('ProductDetails', {itemProduct: item});
  //           }}
  //         />
  //       )}
  //     />
  //   </SafeAreaView>
  // );
};

export default React.memo(Home);

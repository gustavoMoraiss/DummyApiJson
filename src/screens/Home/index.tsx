import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppBar from '../../components/AppBar';
import Header from '../../components/Header';
import getAllProducts, {Product} from '../../service/getAllProductsService';
import {getAllCategories} from '../../service/getAllCategories';
import Categories from '../../components/Categories';
import ProductCard from '../../components/ProductCard';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeParams} from '../../@types/navigation';
import {formatUSD} from '../../utils/format';
import styles from './style';
import {useProducts} from '../../hooks/query';
import Loader from '../../components/Loader';

interface Props {}

const All = 'All';

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState<string>(All);
  const navigation = useNavigation<NavigationProp<HomeParams>>();
  const [productList, setProductList] = useState<Product[]>();

  const {data, isLoading, error} = useProducts();
  if (isLoading) return <Loader />;

  if (error) return <Text>Error loading products</Text>;

  useEffect(() => {
    if (currentCategory === All) {
      setProductList(data);
    } else {
      const filteredProducts = data?.filter(
        item => item?.category === currentCategory,
      );
      setProductList(filteredProducts);
    }
    console.log(data);
  }, [currentCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productList}
        ListEmptyComponent={
          <TouchableOpacity onPress={() => console.log(data)}>
            <Text>No item found</Text>
          </TouchableOpacity>
        }
        numColumns={2}
        style={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <AppBar />
            <Header title="Hello" subTitle="Welcome Modak Interview!" />
            <Categories
              selectedCategory={currentCategory}
              onCategoryPress={item => setCurrentCategory(item)}
              categories={[All, ...getAllCategories]}
            />
          </>
        }
        keyExtractor={product => String(product?.id)}
        renderItem={({item}) => (
          <ProductCard
            title={item.title}
            price={formatUSD(item.price)}
            imageSrc={item.images[0]}
            onPress={() => {
              navigation.navigate('ProductDetails', {itemProduct: item});
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};
export default React.memo(Home);

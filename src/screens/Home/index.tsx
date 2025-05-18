import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
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

interface Props {}

const All = 'All';

const Home = () => {
  const [data, setData] = useState<Product[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>(All);
  const [categories, setCategories] = useState<string[]>([]);
  const navigation = useNavigation<NavigationProp<HomeParams>>();

  useEffect(() => {
    setData(getAllProducts);
  }, []);

  useEffect(() => {
    setCategories(getAllCategories);
  });

  useEffect(() => {
    if (currentCategory === All) {
      setData(getAllProducts);
    } else {
      const filteredProducts = getAllProducts?.filter(
        item => item?.category === currentCategory,
      );
      setData(filteredProducts);
    }
    console.log(data);
  }, [currentCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        ListEmptyComponent={<Text>No item found</Text>}
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
              categories={[All, ...categories]}
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

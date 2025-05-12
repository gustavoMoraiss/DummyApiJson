import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import AppBar from '../../components/AppBar';
import Header from '../../components/Header';
import getAllProducts, {
  GetAllProducts,
} from '../../service/getAllProductsService';
import {getAllCategories} from '../../service/getAllCategories';
import Categories from '../../components/Categories';

const All = 'All';

const Home = () => {
  const [data, setData] = useState<GetAllProducts[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>(All);
  const [categories, setCategories] = useState<string[]>([]);

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
    <SafeAreaView>
      <FlatList
        data={data}
        ListEmptyComponent={<Text>No item found</Text>}
        numColumns={2}
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
        renderItem={({item, index}) => <Text>O</Text>}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);

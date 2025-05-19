import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import Home from './src/screens/Home';
import ProductDetails from './src/screens/ProductDetails';
import {useColorScheme} from 'react-native';
import colors from './src/constants/colors';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  const colorScheme = useColorScheme();
  const myDarkTheme = {
    dark: true,
    colors: {
      colors: {
        background: '#121212',
        text: '#FFFFFF',
        primary: '#BB86FC',
        card: '#1E1E1E',
        border: '#272727',
      },
    },
  };

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from './store/store';
import {setProducts} from './store/actions/products';
import * as productActions from './store/actions/products';
import HomeScreen from './screens/homeScreen';
import CartScreen from './screens/cartScreen';
import FavoritesScreen from './screens/favoritesScreen';
import AuthScreen from './screens/authScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function App() {
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    const fetchProductsAsync = async () => {
      const products = await productActions.fetchProducts();
      store.dispatch(setProducts(products));
    };
    fetchProductsAsync();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Auth"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Auth') {
                iconName = focused ? 'ios-hand-left' : 'ios-hand-left-outline';
              } else if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home-outline';
              } else if (route.name === 'Cart') {
                iconName = focused ? 'ios-cart' : 'ios-cart-outline';
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'ios-heart' : 'ios-heart-outline';
              } else {
                iconName = '';
              }

              return (
                <Ionicons
                  size={size}
                  color={color}
                  name={iconName as keyof typeof Ionicons.glyphMap}
                />
              );
            },
            tabBarStyle: {
              display: route.name === 'Auth' ? 'none' : 'flex',
            },
          })}>
          <Tab.Screen name="Auth" component={AuthScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

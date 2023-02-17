import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import store from '../store/store';
import {useDispatch} from 'react-redux';
import {Ionicons} from '@expo/vector-icons';
import {Product} from '../store/types/products';
import {Divider} from 'react-native-elements';
import * as cartActions from '../store/actions/cart';
import * as favoritesActions from '../store/actions/favorites';
import {setProducts} from '../store/actions/products';

type Props = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
  isFavorite?: boolean;
};

const ProductDetailsScreen: React.FC<Props> = ({
  id,
  title,
  price,
  description,
  isFavorite,
}) => {
  const dispatch = useDispatch();
  const toggleFavoriteHandler = () => {
    const products = Object.values(
      store.getState().products.availableProducts as Product[],
    );
    const updatedProducts = products.map(product => {
      if (product && product.id === id) {
        return {...product, isFavorite: !product.isFavorite};
      }
      return product;
    });
    store.dispatch(setProducts(updatedProducts));
    if (isFavorite) {
      store.dispatch(favoritesActions.removeFromFavorites(id));
    } else {
      store.dispatch(
        favoritesActions.addToFavorites({
          id,
          title,
          price,
          description,
          isFavorite: !isFavorite,
        } as Product),
      );
    }
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        title,
        price,
        description,
        isFavorite,
      } as Product),
    );
  };
  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.pinimg.com/originals/6e/ce/c6/6ecec634fe7613ea6e5fc4c4b535f904.png',
        }}
      />
      <View style={styles.actions}>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={toggleFavoriteHandler}>
          <Ionicons
            name={isFavorite ? 'ios-star' : 'ios-star-outline'}
            size={25}
            color={isFavorite ? 'yellow' : 'black'}
          />
          <Text>
            {!isFavorite ? 'Add To Favorites' : 'Remove From Favorites'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={addToCartHandler}>
          <Ionicons name="ios-cart" size={25} color="black" />
          <Text>{'Add To Cart'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.price}>{title}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <Text style={styles.description}>{description.substring(0,100)}</Text>
      <Divider width={5} color={'black'} style={{marginVertical:10}}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 64,
    height: 64,
    alignSelf: 'center',
  },
  actions: {
    marginVertical: 20,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  button: {
    fontSize: 14,
    backgroundColor: '#413a3a',
    color: '#fff',
  },
});

export default ProductDetailsScreen;

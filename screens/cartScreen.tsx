import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../components/cartItem';
import {RootState} from '../store/reducers';
import * as cartActions from '../store/actions/cart';
import {FontAwesome} from '@expo/vector-icons';

type Props = {
  navigation: any;
};

const CartScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const cartTotalAmount = useSelector(
    (state: RootState) => state.cart.totalAmount,
  );
  const cartItems = useSelector((state: RootState) => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].title,
        productPrice: state.cart.items[key].price,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItems;
  });

  const resetCartHandler = () => {
    Alert.alert('Confirmation', 'Order is completed !');
    dispatch(cartActions.resetCart());
  };

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{' '}
          <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <TouchableOpacity
          disabled={cartItems.length < 1}
          style={{
            alignItems: 'center',
            opacity: cartItems.length < 1 ? 0.3 : 1,
          }}
          onPress={resetCartHandler}>
          <FontAwesome name="credit-card" size={24} color="black" />
          <Text>{'Valider la commande'}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.productId}
          renderItem={({item}) => (
            <CartItem
              image="https://dummyimage.com/400x400/000/fff"
              title={item.productTitle}
              price={item.productPrice}
              quantity={item.quantity}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
  },
  summaryText: {
    fontSize: 18,
  },
  amount: {
    color: 'red',
  },
});

export default CartScreen;

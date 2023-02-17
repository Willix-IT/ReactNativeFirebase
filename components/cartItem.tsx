import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

type Props = {
  image: string;
  title: string;
  price: number;
  quantity: number;
};

const CartItem: React.FC<Props> = ({image, title, price, quantity}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.quantity}>Quantity: {quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
  },
  quantity: {
    fontSize: 14,
  },
});

export default CartItem;

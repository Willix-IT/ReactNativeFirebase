import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../components/productItem';
import {RootState} from '../store/reducers';
import {Product} from '../store/types/products';

type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const products = useSelector(
    (state: RootState) => state.products.availableProducts,
  );
  return (
    <View style={styles.screen}>
      <FlatList
        data={Object.values(products) as Product[]}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          item.id ? (
            <ProductItem
              id={item.id}
              image={item.imageUrl}
              title={item.title}
              description={item.description}
              price={item.price}
              isFavorite={item.isFavorite}
            />
          ) : (
            <></>
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 20,
  },
  container: {
    flex: 1,
    margin: 10,
    height: 150,
    maxWidth: '50%',
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    color: '#000',
  },
  price: {
    fontSize: 14,
    color: '#000',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;

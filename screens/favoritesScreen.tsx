import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../components/productItem';
import {RootState} from '../store/reducers';

type Props = {
  navigation: any;
};

const FavoritesScreen: React.FC<Props> = ({navigation}) => {
  const favoriteProducts = useSelector(
    (state: RootState) => state.favorites.items,
  );

  return (
    <View style={styles.screen}>
      {favoriteProducts.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No favorites found. Start adding some!
          </Text>
        </View>
      ) : (
        <FlatList
          data={favoriteProducts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ProductItem
              id={item.id}
              image={item.imageUrl}
              title={item.title}
              price={item.price}
              description={item.description}
              isFavorite={true}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
  },
});

export default FavoritesScreen;

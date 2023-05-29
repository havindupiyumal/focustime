import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { colors } from '../utils/colors';
import { paddingSizes, fontSizes } from '../utils/sizes';

export const FocusHistory = ({ history }) => {

  if(!history || !history.length) return <Text style={styles.title} >We haven't focused on anything yet</Text>;

  const renderItem = ({item}) => <Text style={styles.item} > - {item}</Text>

  return(
    <View style={styles.container} >
      <Text style={styles.title} >Things we'vs focused on</Text>
      <FlatList 
        data={history}
        renderItem={renderItem}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    padding: paddingSizes.md,
    flex: 1
  },
  item:{
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: paddingSizes.sm,
    alignItems: 'center',
    textAlign: 'center'
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    padding: paddingSizes.lg,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});


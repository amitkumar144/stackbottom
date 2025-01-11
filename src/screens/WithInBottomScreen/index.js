import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WithInBottomScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WithInBottomScreen</Text>
    </View>
  );
};

export default WithInBottomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

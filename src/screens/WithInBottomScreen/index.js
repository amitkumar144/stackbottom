import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const WithInBottomScreen = ({navigation}) => {
  useEffect(() => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
          paddingTop: 10,
        },
      });
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>WithInBottomScreen</Text>
      <Button title="goBack" onPress={() => navigation.goBack()} />
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

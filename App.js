import React from 'react';
import MainNavigator from './src/navigation/rootNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';


const App = () => {
  return (
    <SafeAreaProvider>
      <MainNavigator />
    </SafeAreaProvider>
  );
};

export default App;


// useEffect(() => {
//   checkUserIdEmpty();
//   navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
//   return () => {
//     navigation.getParent()?.setOptions({
//       tabBarStyle: {
//         backgroundColor: Colors.COLOR_TRANSPARENT,
//         borderTopWidth: 0,
//         elevation: 0,
//         paddingTop: Mixins.scaleSize(10),
//       },
//     });
//     isIOS && layoutAnimation();
//   };
// }, []);
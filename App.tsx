/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import Landing from './taskmgr/screens/Landing';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Home from './taskmgr/screens/home/Home';
 import Faciligo from './taskmgr/screens/samples/Faciligo';
 import Ongoing from './taskmgr/screens/reviews/Ongoing';
 import Hometask from './taskmgr/screens/home/Hometask';
 
 const Stack = createNativeStackNavigator();
 
 const App = () => {
 
   return (
     // <SafeAreaView style={styles.mainContainer}>
     //   <ScrollView contentInsetAdjustmentBehavior="automatic">
     //     <View>
     //       <Text>Sample</Text>
     //     </View>
     //   </ScrollView>
     // </SafeAreaView>
     
     <NavigationContainer>
       <StatusBar hidden />
       <Stack.Navigator initialRouteName="land">
         <Stack.Screen name="land" component={Landing} />
         <Stack.Screen name="home" component={Home} />
         <Stack.Screen name="workorder" component={Faciligo} />
         <Stack.Screen name="hometask" component={Hometask} />
         <Stack.Screen name="ongoing" component={Ongoing} />
       </Stack.Navigator>
     </NavigationContainer>
     
     // <Landing />
    //  <Ongoing />
     
   );
 };
 
 const styles = StyleSheet.create({
   mainContainer: {
     backgroundColor: '#ccc',
     height: '100%',
   },
 });
 
 export default App;
 
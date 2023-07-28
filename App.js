import { StatusBar } from 'expo-status-bar';
import { NativeWindStyleSheet } from 'nativewind';
import { StyleSheet, Text, View } from 'react-native';
import {StyledComponent} from 'nativewind';
import {TailwindProvider} from 'tailwind-rn';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen'
import SeeAllScreen from './screens/SeeAllScreen';
import OrderScreen from './screens/OrderScreen';

import { store } from './store';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <TailwindProvider>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Order" component={OrderScreen} options={{ presentation:"modal" , headerShown: false }} />
        <Stack.Screen name="SeeAll" component={SeeAllScreen} options={{ presentation:"modal" , headerShown: false }} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        </Stack.Navigator>
    </TailwindProvider>
    </Provider>
    </NavigationContainer>
    
);
}

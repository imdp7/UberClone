import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {createStackNavigator} from '@react-navigation/stack'
import Payments from '../components/Payments';
import Wallet from '../components/Wallet';

const WalletScreen = () => {
	const Stack = createStackNavigator();

	return (

		<SafeAreaView style={tw`bg-white flex-grow`}>
		
		<View style={tw`h-1/4 top-2`}>
		<Wallet/>	
		</View>
		<View style={tw`h-3/4`}>
		<Stack.Navigator>
		<Stack.Screen
		name='Payments'
		component={Payments}
		options={{
			headerShown:false,
		}}
		/>
		</Stack.Navigator>
		</View>	
		
		</SafeAreaView>
	)
}

export default WalletScreen

const styles = StyleSheet.create({})

import React from 'react'
import {  View,TouchableOpacity,ScrollView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import {createStackNavigator} from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import Payments from '../components/Payments';
import {Icon} from 'react-native-elements/dist/icons/Icon'
import { useNavigation } from '@react-navigation/native'
import VerticalSwipes from '../components/VerticalSwipes';


const MapScreen = () => {
	const Stack = createStackNavigator();
	const navigation = useNavigation();
	return (
		<View>
		<TouchableOpacity style={tw`bg-gray-200 absolute top-16 left-8 z-50 rounded-full shadow-lg`}
		onPress={() => navigation.navigate('HomeScreen')}>
		<Icon name="menu"/>
		</TouchableOpacity>
		
		<View style={tw`h-1/2`}>
			<Map/>
		</View>
		<View style={tw`h-1/2`}>
		<Stack.Navigator>
		<Stack.Screen
		name='NavigateCard'
		component={NavigateCard}
		options={{
			headerShown:false,
		}}
		/>
		<Stack.Screen
		name='RideOptionsCard'
		component={RideOptionsCard}
		options={{
			headerShown:false,
		}}
		/>
		</Stack.Navigator>
		</View>	
	
			{/* <TouchableOpacity style={tw`bg-gray-200 absolute top-16 left-8 z-50 rounded-full shadow-lg`}
		onPress={() => navigation.navigate('HomeScreen')}>
		<Icon name="menu"/>
		</TouchableOpacity>
			<View style={tw`h-3/5`}>
			<Map/>
			</View>	
			<View style={tw`h-2/5`}>
			<VerticalSwipes/>
			</View> */}

		</View>
	)
}

export default MapScreen


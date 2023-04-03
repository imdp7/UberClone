import React from 'react'
import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {Icon} from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { setOrigin } from '../slices/navSlice'

const data = [
	{
		id:'123',
		icon:'home',
		location:'Home',
		destination:'2 Dayton Dr, Edison, NJ',
  		
	},
	{
		id:'456',
		icon:'briefcase',
		location:'Work',
		destination:'London Eye, UK',

	},	
];
const NavFavourites = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	return (
		<FlatList 
		data={data} 
		keyExtractor={(item) => item.id}
		ItemSeparatorComponent={() => <View style={[tw`bg-gray-200`,{height:0.5}]}/>}
		renderItem={({item:{location,icon,destination,geometry}}) => (
			<TouchableOpacity style={tw`flex-row items-center p-5`}
			onPress={(data,details = null) => {
		dispatch(setOrigin({
			location: destination,
			description: destination,

		}),
		console.log(destination))
		navigation.navigate('MapScreen')
		}}>
			<Icon 
			style={tw`mr-4 rounded-full bg-gray-300 p-3`}	
			name={icon}
			type='ionicon'
			color='white'
			size={18}
			/>
			<View>
				<Text style={tw`font-semibold text-lg`}>{location}</Text>
				<Text style={tw`text-gray-500`}>{destination}</Text>
			</View>
			</TouchableOpacity>
		)}
		/>
	);
};

export default NavFavourites

const styles = StyleSheet.create({})

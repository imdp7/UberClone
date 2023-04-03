import React from 'react'
import { FlatList, Text, View,TouchableOpacity,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectOrigin} from '../slices/navSlice'

const data = [
{
	id:'123',
	title:'Get a Ride',
	image:"https://links.papareact.com/3pn",
	screen:'MapScreen',
},
{
	id:'456',
	title:'Order Food',
	image:"https://links.papareact.com/28w",
	screen:'EatsScreen',
},
]

const NavOptions = () => {
	const navigation = useNavigation();
	const origin = useSelector(selectOrigin)
	return (
		<FlatList
		keyExtractor={(item) => item.id}
		data={data}
		horizontal
		renderItem={({item}) => (
		<TouchableOpacity
		disabled={!origin}
		onPress={() => navigation.navigate(item.screen)}
		style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 ${!origin && 'bg-gray-700 bg-opacity-50'}`}>
			<View>
				<Image
				source={{uri: item.image}}
				style={{width:120,height:120,resizeMode:'contain'}}
				/>
				<Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
				<Icon
				style={tw`p-2 bg-black rounded-full w-10 mt-4`}
				type="antdesign"
				name='arrowright'
				color='white'
				/>
			</View>
		</TouchableOpacity>
		)}
		/>
	)
}

export default NavOptions

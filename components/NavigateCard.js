import React from 'react'
import { StyleSheet, Text, SafeAreaView,View,TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_API_KEY } from '@env';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import NavFavourites from './NavFavourites';
import {Icon,Input} from 'react-native-elements'

const NavigateCard = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	return (
		<SafeAreaView style={tw`bg-white flex-1`}>
			<Text style={tw`text-center py-5 text-xl`}>Good Morning, Darshan</Text>
		<View style={tw`border-t border-gray-200 flex-shrink`}>
		<View>
		<GooglePlacesAutocomplete
		placeholder='Where to?'
		debounce={400}
		styles={toInputBoxStyles}
		nearbyPlacesAPI='GooglePlacesSearch'
		returnKeyType='search'
		autoFillOnNotFound
		fetchDetails={true}
		enablePoweredByContainer={false}
		textInputProps={{
        InputComp: Input,
        leftIcon: { type: 'font-awesome', name: 'map-marker',color:'red' },
        errorStyle: { color: 'red' },
      }}
		query={{
			key: GOOGLE_MAPS_API_KEY,
			language:'en'
		}}
		onPress={(data,details = null) => {
		dispatch(setDestination({
			location: details.geometry.location,
			description: data.description
		}))
		navigation.navigate('RideOptionsCard')
		}}

		/>
		</View>
		<NavFavourites/>
		</View>
		<View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
			<TouchableOpacity style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
			onPress={()=> (navigation.navigate("RideOptionsCard"))}>
			<Icon name='car' type='font-awesome' color='white' size={16}/>
			<Text style={tw`text-white text-center`}>Rides</Text>
			</TouchableOpacity>
			<TouchableOpacity style={tw`flex flex-row justify-between bg-white w-24 px-4 py-3 rounded-full border-2`}>
			<Icon name='fast-food-outline' type='ionicon' color='black' size={16}/>
			<Text style={tw`text-black text-center`}>Food</Text>
			</TouchableOpacity>
		</View>
		</SafeAreaView>
	)
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		paddingTop: 20,
		flex:0,
	}
})
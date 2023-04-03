import React, { useState, useEffect } from 'react'
import { Text,View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GOOGLE_MAPS_API_KEY } from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination,setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
import { Input } from 'react-native-elements';

const HomeScreen = () => {

	const dispatch = useDispatch();
	return (
		<SafeAreaView style={tw`bg-white h-full`}>
		<View style={tw`p-5`}>
		  <Image
			  style={{
				  width:100,
				  height:100,
				  resizeMode:'contain'
			  }}
			  source={{
				  uri:'https://links.papareact.com/gzs',
			 }}
		  />
		  <GooglePlacesAutocomplete
      			placeholder='Where From?'
			returnKeyType={'search'}
			textInputProps={{
        		InputComp: Input,
			autoFillOnNotFound:true,
        		leftIcon: { type: 'font-awesome', name: 'map-marker',color:'red' },
        		errorStyle: { color: 'red' },
      					}}
			//currentLocation={true}
			//currentLocationLabel='Current Location'
			styles={{
				container: {flex:0},
				 textInput: {fontSize:18}}}
      			query={{
        		key: GOOGLE_MAPS_API_KEY,
        		language: 'en',
      			}}
			onPress={(data, details = null) => {
			dispatch(setOrigin({
				location: details.geometry.location,
				description: data.description,
			})
			);
			dispatch(setDestination(null));
			}}
			fetchDetails={true}
			minLength={2}
			enablePoweredByContainer={false}
			nearbyPlacesAPI='GooglePlacesSearch'
			debounce={400}
    />
		  <NavOptions/>
		  <NavFavourites/>
		</View>
		</SafeAreaView>
	)
}

export default HomeScreen


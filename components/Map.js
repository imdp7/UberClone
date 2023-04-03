import React,{useRef,useEffect} from 'react'
import {  Text, View } from 'react-native'
import MapView,{Marker} from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';
import { useSelector,useDispatch } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_API_KEY } from '@env';

const Map = () => {
	const origin = useSelector(selectOrigin);
	const destination = useSelector(selectDestination);
	const mapRef = useRef(null);
	const dispatch = useDispatch();

	useEffect(() => {
	if (!origin || !destination) return;

	//Zoom fit Markers
	mapRef.current.fitToSuppliedMarkers(['origin','destination'],{
	  edgePadding: {top:50, right:50,bottom:50,left:50},
	});
	},[origin,destination]);

	useEffect(() => {
		if (!origin || !destination) return;
		const getTravelTime = async() => {
			fetch (`https://maps.googleapis.com/maps/api/distancematrix/json?units=
			imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_API_KEY}`)
			.then((res) => res.json())
			.then(data => {
				dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
			})
		}
		getTravelTime();
	},[origin,destination,GOOGLE_MAPS_API_KEY])
	return (
		<MapView
	ref={mapRef}
	style={tw`flex-1`}
	mapType='mutedStandard'
      	initialRegion={{
	latitude: origin?.location?.lat,
      	longitude: origin?.location?.lng,
      	latitudeDelta: 0.005,
      	longitudeDelta: 0.005,
    }}
  >
  {origin && destination && (
	<MapViewDirections
		apikey={GOOGLE_MAPS_API_KEY}
		origin={origin?.description}
		destination={destination?.description}
		strokeColor='black'
		strokeWidth={3}
		key={origin?.location}
	/>
  )}
	{origin?.location && (
	<Marker
	coordinate={{
		latitude: origin.location?.lat,
		longitude: origin.location?.lng
	}}
	title='Pick Up'
	description={origin?.description}
	identifier='origin'

	/>
	)}
	{destination?.location && (
	<Marker
	coordinate={{
		latitude: destination.location?.lat,
		longitude: destination.location?.lng
	}}
	title='Drop Off'
	description={destination?.description}
	identifier='destination'
	pinColor='blue'

	/>
	)}
  </MapView>
	)
}

export default Map

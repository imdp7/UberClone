import React,{useState} from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector,useDispatch } from 'react-redux';
import { selectTravelTimeInformation,setDestination,setOrigin, setRide,selectRide } from '../slices/navSlice';

const data = [
	{
		id: 'Uber-X-123',
		title: 'UberX',
		multiplier:'1',
		image:'https://links.papareact.com/3pn',
		space:'3',
		points:'2x points'
	},
	{
		id: 'Uber-XL-456',
		title: 'Uber XL',
		multiplier:'1.2',
		image:'https://links.papareact.com/5w8',
		space:'5',
		points:'2x points'
	},
	{
		id: 'Uber-LUX-123',
		title: 'Uber LUX',
		multiplier:'1.75',
		image:'https://links.papareact.com/7pf',
		space:'5',
		points:'2x points'
	}
]
const SURGE_CHARGE_RATE = 1.5;
const RideOptionsCard = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch()
	const [selected, setSelected] = useState(null);
	const travelTimeInformation = useSelector(selectTravelTimeInformation);
	const ride = useSelector(selectRide)
	return (
		<SafeAreaView style={tw`bg-white flex-grow`}>
		<View>
		<TouchableOpacity style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
		onPress={() => (navigation.navigate('NavigateCard'))
		}>
		<Icon name='chevron-left' type='fontawesome'/>
		</TouchableOpacity>
			<Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
		</View>
		<FlatList
		data={data}
		keyExtractor={(item) => item.id}
		renderItem={({item:{id,title,multiplier,space,image,points},item}) => (
			<TouchableOpacity 
			style={tw`flex-row items-center justify-between px-5 ${
				id === selected?.id && "bg-gray-300"}`}
			onPress={() => setSelected(item)
			}>
				<Image
				  style={{
					  width:100,
					  height:100,
					  resizeMode:'contain'
				  }}
				  source={{uri:image}}
				/>
				<View style={tw`-ml-6 px-5`}>
					<Text style={tw`text-xl font-semibold`}>{title}</Text>
					<Text>{travelTimeInformation?.duration?.text}</Text>
				</View>
				{selected?.id === id  &&
				<View style={tw`flex-row items-center -ml-6`}>
					<Icon
				style={tw`mr-2 w-10`}
				type="font-awesome"
				name='user'
				size={20}
				color='black'
				/>
				  <Text style={tw`-ml-4 text-base`}>{space}</Text>
				</View>
				}
				<View style={tw`flex-col items-center`}>
				  <Text style={tw`text-xl ${selected?.id ===id && 'font-bold'}`}>{new Intl.NumberFormat('en-US',
				  {
					  style:'currency',
					  currency:'USD',
				  }).format(
					  (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier)/100
				  )}
				  </Text>
				  
				  {selected?.id === id  &&
				  <Text style={tw`text-base text-black`}>{points}</Text>
				  }
				  </View>
			</TouchableOpacity>
		)}
		/>
		<View style={tw`mt-auto border-t border-gray-200`}>
			<TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`} 
			onPress={() => (
				dispatch(setRide({
					ride: [selected.id, selected.title, selected.space, selected.multiplier,selected.points]

				})),
					console.log(ride),	
				navigation.navigate('WalletScreen')
				)}>
			{selected ?
			<Text style={tw`text-center text-xl text-white`}>Confirm {selected?.title}</Text>
			
			:
			<Text style={tw`text-center text-xl text-white`}>Choose {selected?.title}</Text>}
			
			</TouchableOpacity>
		</View>
		</SafeAreaView>
	)
}

export default RideOptionsCard

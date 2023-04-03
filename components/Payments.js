import React,{useState} from 'react'
import { FlatList, StyleSheet, Text, View,TouchableOpacity,SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useDispatch,useSelector } from 'react-redux'
import { selectPayment, setPayment } from '../slices/navSlice';

const data = [
	{
		id:'707',
		icon:'card',
		method:'Paypal',

	},
	{
		id:'123',
		icon:'card',
		method:'Apple Pay',
		number:'****3199'
	},
	{
		id:'456',
		icon:'briefcase',
		method:'Master Card',
		number:'****4278'

	},
	{
		id:'451',
		icon:'briefcase',
		method:'Visa',
		number:'****8709'

	},
	{
		id:'675',
		icon:'briefcase',
		method:'Cash',

	},
	{
		id:'025',
		icon:'add',
		method:'Add Payment Method',

	},
];

const Payments = () => {
	const [selected, setSelected] = useState(null);
	const navigation = useNavigation()
	const dispatch = useDispatch()
	const payment = useSelector(selectPayment)
	return (
		<SafeAreaView style={tw`bg-white flex-grow`}>
		<FlatList 
		data={data} 
		keyExtractor={(item) => item.id}
		ItemSeparatorComponent={() => <View style={[tw`bg-gray-200`,{height:0.5}]}/>}
		renderItem={({item:{id,icon,method,number},item}) => (
			<TouchableOpacity 
			style={tw`flex-row p-5 ${
				id === selected?.id && "bg-gray-300"}`}
				onPress={() => setSelected(item)}>
			<Icon 
			style={tw`mr-4 rounded-full bg-gray-300 p-3`}	
			name={icon}
			type='ionicon'
			color='white'
			size={18}
			/>
			<View style={tw`justify-between `}>
				<Text style={tw`font-semibold text-lg`}>{method}</Text>
				<Text style={tw`text-gray-500`}>{number}</Text>
			</View>
			</TouchableOpacity>
		)}
		/>
		<View style={tw`mt-auto border-t border-gray-200`}>
			<TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
			onPress={() => (
				dispatch(setPayment({
					payment: [selected?.id, selected?.method,selected?.number]

				})),
					console.log(payment),		
				navigation.navigate('WalletScreen')
				)}>
			{selected ? 
			<Text style={tw`text-center text-xl text-white`}>Confirm {selected?.method}</Text>
			:
			<Text style={tw`text-center text-xl text-white`}>Choose {selected?.method}</Text>}
			</TouchableOpacity>
		</View>
		</SafeAreaView>
	)
}

export default Payments

const styles = StyleSheet.create({})

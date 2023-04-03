import React from 'react'
import { StyleSheet, Text,TouchableOpacity, SafeAreaView } from 'react-native'
import {Icon} from 'react-native-elements/dist/icons/Icon'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
const Wallet = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView>
		<TouchableOpacity style={tw`absolute left-3 z-50 p-3 rounded-full`}
		onPress={() => (navigation.navigate('RideOptionsCard'))
		}>
		<Icon name='chevron-left' type='fontawesome'/>
		</TouchableOpacity>
		<Text style={tw`mt-10 text-3xl font-bold top-5 pl-5`}>
			Wallet 
			</Text>
			<Text style={tw`mt-4 text-lg top-5 font-semibold text-center`}>
			Select a payment Method
			</Text>
		</SafeAreaView>
	)
}

export default Wallet

const styles = StyleSheet.create({})

import React from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import VerticalSwipe from 'react-native-vertical-swipe';
import {createStackNavigator} from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

const VerticalSwipes = () => {
  const Stack = createStackNavigator();
	return (
		<View style={styles.container}>
        <VerticalSwipe
          style={styles.dragContainer}
          content={(
            <View style={styles.innerContainer}>
              <ScrollView>
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

              </ScrollView>
            </View>
          )}>
          <NavigateCard/>
        </VerticalSwipe>
      </View>
	)
}

export default VerticalSwipes

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
      
	dragContainer: {
	  flex: 1,
	  alignItems: "center",
	  justifyContent: "center",
    padding:20,
	},
      
	innerContainer: {
	  backgroundColor: "black",
	},
      
	innerText: {
	  padding: 20,
	}
      });

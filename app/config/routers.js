import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home  from '../components/pages/Home';
const Tab = createBottomTabNavigator();

const horizontalAnimation = {
	cardStyleInterpolator: ({ current, layouts }) => {
		return {
			cardStyle: {
				transform: [
					{
						translateX: current.progress.interpolate({
							inputRange: [0, 1],
							outputRange: [layouts.screen.width, 0],
						}),
					},
				],
			},
		};
	},
};

const SetOfStack = (value) => {
	return (
		<Tab.Navigator
			initialRouteName = {value.prop}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "TRACE") {
						iconName = require('../assets/images/png/TRACE.png') ;
					} else if (route.name === "Explore") {
						iconName = require('../assets/images/png/Explore.png') ;
					}else if(route.name === "Friends") {
						iconName = require('../assets/images/png/Friends.png') ;
					}

					return <Image source={iconName} style={{ width: 25, height: 25 }} />;
				},
				
			})}
			tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray' }}
		>
        <Tab.Screen 
        	name="TRACE" 
        	component={Home}
        	options={{
          		// tabBarVisible: false,
				headerShown: false
        	}} 
        />
		<Tab.Screen 
        	name="Explore" 
        	component={Home}
        	options={{
          		// tabBarVisible: false,
				headerShown: false
        	}} 
        />
		<Tab.Screen 
        	name="Friends" 
        	component={Home}
        	options={{
          		// tabBarVisible: false,
				headerShown: false
        	}} 
        />
       
      </Tab.Navigator>
		// <Stack.Navigator
			
		// 	// options={{ headerShown: false, }}
		// 	initialRouteName={value.prop}
		// 	screenOptions={[horizontalAnimation]}
		// 	>
		// 	<Stack.Screen name="Home" component={Home} options={{ headerShown: false,   }} />
			

		// 	{/* <Stack.Screen name="NearParkingLot" component={NearParkingLot} />
			
		// 	<Stack.Screen name="SplashPermission" component={SplashPermission} />
		// 	<Stack.Screen name="SplashCarNum" component={SplashCarNum} />
		// 	<Stack.Screen name="ParkingLotView" component={ParkingLotView} />
		// 	<Stack.Screen name="Settings" component={Settings} />
		// 	<Stack.Screen name="FavoriteType" component={FavoriteType} />
		// 	<Stack.Screen name="FavoriteLocation" component={FavoriteLocation} /> */}
		// </Stack.Navigator>
	);
};



export const createRootNavigator = (initapp) => {

	console.log('createRootNavigator', initapp);
	

	// let initialRouteName = 'Login'
	// if (permissionCheck) {
	// 	initapp = 'Login'
	// } 
// else {
// 			initialRouteName = 'NearParkingLot'
// 		}
// 	} else {
// 		initialRouteName = 'VideoSplash'
// 	}
// 	console.log('initialRouteName',initialRouteName, permissionCheck);
	// if(!networkfailed){ 뷰를 하나 더만들어서 네트워크 실패 시 그쪽으로 보낼 것
		return (
		
			<NavigationContainer>
				<SetOfStack prop={initapp} />
			</NavigationContainer>
		)
	// }else {
	// 	return(
	// 		<View style={{flex:1, backgroundColor:'white'}}>
	// 			{networkfailed && <Toast ref={(ref) => Toast.setRef(ref)} />}
	// 		</View>
	// 	)
		
	// }
	
}
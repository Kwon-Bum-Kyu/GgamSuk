import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../components/pages/Home';
import Friends from '../components/pages/Friends';
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



const MyTabBar = ({ state, descriptors, navigation }) => {
	return (
		<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
			{state.routes.map((route, index) => {
				
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
							? options.title
							: route.name;
				
				const isFocused = state.index === index;
				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						// The `merge: true` option makes sure that the params inside the tab screen are preserved
						navigation.navigate({ name: route.name, merge: false });
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};
				let iconName;
				if (route.name === "TRACE") {
					iconName = require('../assets/images/png/TRACE.png');
				} else if (route.name === "Explore") {
					iconName = require('../assets/images/png/Explore.png');
				} else if (route.name === "Friends") {
					iconName = require('../assets/images/png/Friends.png');
				}

				return (
					<TouchableOpacity
						key={route.name}
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={{ flex: 1, alignItems:'center', justifyContent:'center' }}
					>
						
						<Text style={{ color: isFocused ? '#673ab7' : '#222', textAlign: 'center', fontSize:18 }}>
							{label}
						</Text>
						<Image source={iconName} style={{ width: 50, height: 50, marginTop:5 }} />
					</TouchableOpacity>
				);
			})}
		</View>
	);
}

const SetOfStack = (value) => {
	return (
		<Tab.Navigator
			tabBar={props => <MyTabBar {...props} />}
		// initialRouteName = {value.prop}
		// screenOptions={({ route }) => ({
		// 	tabBarIcon: ({ focused, color, size }) => {


		// 		return <Image source={iconName} style={{ width: 25, height: 25 }} />;
		// 	},

		// })}
		// tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray' }}
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
				component={Friends}
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
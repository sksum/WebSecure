import 'react-native-gesture-handler';
import React,{ Component } from 'react';
import {View , Text, Platform} from 'react-native';

import RoomScreen  from '../Screens/RoomScreen.js'; 
import SetupScreen from '../Screens/SetupScreen.js';  

import { createStackNavigator } from '@react-navigation/stack';
import Vid from './Vid';

const Stack = createStackNavigator();

function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
}
  
class MainComponent extends Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        return (
            <Stack.Navigator initialRouteName="Rooms">
                <Stack.Screen name="Rooms" component={RoomScreen} />
                <Stack.Screen name="Setup" component={SetupScreen} />
            </Stack.Navigator>
        );
    }
}

export default MainComponent;
import React, { Component } from "react";
import { Text ,View } from "react-native";
import Vid  from '../Components/Vid'; 
class HomeScreen extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <Text onPress = {() => navigate("Setup")}>Setup</Text>
          </View>
        );
    }
}
export default HomeScreen;
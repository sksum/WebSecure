import React, { Component } from "react";
import { Text ,View } from "react-native";

class SetupScreen extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Setup Screen</Text>
          </View>
        );
    }
}
export default SetupScreen;
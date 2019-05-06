/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native'


export class App extends Component {
    render() {
        return (
            <View style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1
            }}>
                <Text style={{
                    color: "#33802a",
                    fontSize: 100,
                    textAlign: "center"
                }}>Hello world</Text>
            </View>
        )
    }
}


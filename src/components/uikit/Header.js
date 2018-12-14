import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { w } from '../../services/constants';

const styles = StyleSheet.create({
    headerViewStylecontainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        backgroundColor: 'pink',
        // paddingHorizontal: 10,
        ...ifIphoneX({
            height: 100
        },
        {
            height: 60 
        }),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        elevation: 2,
        // position: 'relative'
    },
    sub: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headerTextStyle: {
        color: '#fff',
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 28,
        width: w - 20
    },
    leftButtonstyle: {
        fontSize: 28,
        paddingHorizontal: 10
    }
});

export function Head({ title, onPress, leftIcon, leftColor }) {
    return (
        <View style={styles.headerViewStylecontainer}>
        <TouchableOpacity onPress={onPress} style={styles.sub}>
            <Ionicons name={leftIcon} style={styles.leftButtonstyle} color={leftColor} />
            <Text
                style={styles.headerTextStyle}
                numberOfLines={1}
                ellipsizeMode='tail'
            >{title}</Text>
        </TouchableOpacity>
        </View>
    );
}

// export { Header, Head };

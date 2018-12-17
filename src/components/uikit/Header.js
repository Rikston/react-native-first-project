import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { w, BLUE } from '../../services/constants';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: BLUE,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        ...ifIphoneX({
            height: 100
        },
        {
            height: 60 
        }),
    },
    sub: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textStyle: {
        color: '#fff',
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 28,
        width: w - 75
    },
    iconLeftStyle: {
        fontSize: 28,
        paddingHorizontal: 10
    }  
});

export function Head({
     title,
     iconLeft,
     iconRight,
     colorLeft,
     colorRight,
     onPressLeft,
     onPressRight
    }) {
    const { container, sub, textStyle, iconLeftStyle } = styles;
    return (
        <View style={container}>
            <View style={sub}>
                {iconLeft &&
                    <TouchableOpacity onPress={onPressLeft}>
                        <Ionicons name={iconLeft} style={[iconLeftStyle, { color: colorLeft }]} />
                    </TouchableOpacity>
                }
                <Text
                    style={textStyle}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                >{title}</Text>
                {iconRight &&
                    <TouchableOpacity onPress={onPressRight}>
                        <MaterialCommunityIcons name={iconRight} style={[iconLeftStyle, { color: colorRight }]} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
}

// export { Header, Head };

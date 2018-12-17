import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { w, BLUE } from '../../services/constants';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        width: w - 35,
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 20
    },
    inputStyle: {
        fontSize: 18,
        height: 23,
        width: w - 90,
        marginLeft: 15,
        backgroundColor: '#fff'
    },
    searchStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        height: 40,
        width: 40,
        borderRadius: 20
    },
    iconRightStyle: {
        fontSize: 30,
        marginTop: 2
    }
});

export function SearchBar({
     iconRight,
     colorRight,
     placeholder,
     value,
     onChangeText,
     onPressRight,
     onBlur
    }) {
    const { container, sub, iconRightStyle, inputStyle, searchStyle } = styles;
    return (
        <View style={container}>
            <View style={sub}>
                <TextInput
                    textContentType="password"
                    style={inputStyle}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    value={value}
                    onBlur={onBlur}
                />
                {iconRight &&
                    <TouchableOpacity onPress={onPressRight}>
                        <View style={searchStyle}>
                            <MaterialCommunityIcons name={iconRight} style={[iconRightStyle, { color: colorRight }]} />
                        </View>
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
}

// export { Header, Head };

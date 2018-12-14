import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { w } from '../../services/constants';

const ImageCard = ({ data, onPress }) => {
    const { h1, cover, sub, container } = styles;
    const { name: title, image } = data;
    if (image) {
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={container}>
                    <View style={sub}>
                        <Image style={cover} source={{ url: image.medium }} />
                    </View>
                    <Text style={h1}>{title.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return null;
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        alignItems: 'center',
        width: w / 2.1,
        paddingVertical: 5
    },
    sub: {
        shadowColor: '#000',
        shadowRadius: 8,
        borderRadius: 8,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        marginBottom: 5
    },
    h1: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 18,
        textAlign: 'center',
        width: w / 2.4,
        // backgroundColor: '#0f0'
    },
    cover: {
        width: w / 2.4,
        height: w * 0.63,
        borderRadius: 10,
        
    }
});
export { ImageCard };

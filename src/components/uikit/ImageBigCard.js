import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { w } from '../../services/constants';

const ImageBigCard = ({ data }) => {
    const { cover, sub, container } = styles;
    const { image } = data;
    const img = image === null ? 'https://fcrmedia.ie/wp-content/themes/fcr/assets/images/default.jpg' : image.medium;
    if (image) {
        return (
                <View style={container}>
                    <View style={sub}>
                        <Image style={cover} source={{ url: img }} />
                    </View>
                </View>
        );
    }
    return null;
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        alignItems: 'center',
        paddingVertical: 20
    },
    sub: {
        shadowColor: '#000',
        shadowRadius: 8,
        borderRadius: 8,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        marginBottom: 5
    },
    cover: {
        width: w * 0.9,
        height: w,
        borderRadius: 10,
        
    }
});
export { ImageBigCard };

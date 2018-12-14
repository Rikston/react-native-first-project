import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Head, Layout, ImageBigCard } from '../components/uikit';


const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    cover: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    h1: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 30,
        padding: 15,
        textAlign: 'center'
    },
    h2: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 15,
        padding: 15,
        textAlign: 'center'
    },
    sub: {
        flex: 1,
        alignItems: 'center',
        // marginBottom: 150,
        backgroundColor: '#FFFFFF'
    }
});

class DetailsScreen extends Component {
    render() {
        console.log('props', this.props.navigation.state.params.show);
        const { detailsContainer, cover, h1, h2, sub } = styles;
        const { navigation } = this.props;
        const { name, summary, image } = navigation.state.params.show;
        // const data = { name, image };
        return (
            <View style={detailsContainer}>
                <Head
                    title={'back'}
                    onPress={() => navigation.goBack()}
                    leftIcon='ios-arrow-back' 
                    leftColor='#fff' 
                />
                <ScrollView>
                    <View style={sub}>
                    <ImageBigCard data={{ image }} />
                        <Text style={h1}>{name.toUpperCase()}</Text>
                        <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default DetailsScreen;

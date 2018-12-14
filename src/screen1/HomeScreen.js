import React, { Component } from 'react';
import { View } from 'react-native';
import { Head, ImageCard, Layout } from '../components/uikit/';
import { BATMAN_DETAILS } from '../routes';

const url = 'http://api.tvmaze.com/search/shows?q=betman';

export default class HomeScreen extends Component {
  state = {
    title: 'BETMAN',
    data: []
  }

  componentDidMount = async () => {
    console.log('componentDidMount');
    // eslint-disable-next-line no-undef
    try {
      // eslint-disable-next-line no-undef
      const response = await fetch(url);
      const data = await response.json();
      console.log(response);
      console.log(data);
      this.setState({ data });
    } catch (e) {
      console.info(e);
    }  
  }

  render() {
    const { title, data } = this.state;
    const { navigation } = this.props;
    console.log(navigation);
    console.log(this.props);
    return (
      <View style={{ flex: 1, backgroundColor: '#fffa3' }}>
        {/* <Header title='asd' />
        <Header title='linearafd\nfwe' />
        <Header title='sdq' />
        <MyComponent momento='sdqw' />
        <ImageCard url={'https://github.com/react-native-village/react-native-init/raw/master/stargate/images/Stargate.jpg'} />
        <MyComponent momento='momento' /> */}
        <Head
          title={title}
        />
        <Layout>
          {
            //   console.log(data)
            data.map(item => (
                <ImageCard
                    data={item.show}
                    key={item.show.id}
                    onPress={() => navigation.navigate(BATMAN_DETAILS, (item))}
                />
            ))
          }
        </Layout>
      </View>
      // <Header title="Asdq" />
    );
  }
}

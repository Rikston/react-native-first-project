import React, { Component } from 'react';
import { View } from 'react-native';
import { Head, ImageCard, Layout } from '../components/uikit/';
import { STARGATE_DETAILS } from '../routes';

const url = 'http://api.tvmaze.com/search/shows?q=stargate';

export default class HomeScreen extends Component {
  state = {
    title: 'Star Gate',
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

  onGoBack = (someDataFromChildren) => {
    console.log('info from children', someDataFromChildren);
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
          leftIcon='ios-menu'
          leftColor='#fff'
          onPress={()=> navigation.openDrawer()}
        />
        <Layout>
          {
            //   console.log(data)
            data.map(item => (
                <ImageCard
                    data={item.show}
                    key={item.show.id}
                    onPress={() => navigation.navigate(STARGATE_DETAILS, ({ show: item.show, onGoBack: this.onGoBack }))}
                />
            ))
          }
        </Layout>
      </View>
      // <Header title="Asdq" />
    );
  }
}

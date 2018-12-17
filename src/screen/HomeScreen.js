import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Head, ImageCard, Layout, SearchBar } from '../components/uikit/';
import { STARGATE_DETAILS } from '../routes';
import { searchChanged } from '../actions';

const url = 'http://api.tvmaze.com/search/shows?q=stargate';

class HomeScreen extends Component {
  state = {
    title: 'Star Gate',
    data: [],
    visibleSearchBar: false,
    value: 'asdq'
  }

  componentDidMount = async () => {
    console.log('componentDidMount');
    // eslint-disable-next-line no-undef
    try {
      // eslint-disable-next-line no-undef
      const response = await fetch(url);
      const data = await response.json();
      // console.log(response);
      // console.log(data);
      this.setState({ data });
    } catch (e) {
      console.info(e);
    }  
  }

  _onChangeText = (text) => {
    // console.log(text);
    this.setState({ value: text });
    this.props.searchChanged(text);

  }
  shouldComponentUpdate(e) {
    // console.log('shuold component', e);
    // console.log('this', this);
    return true;
  }
  render() {
    const { title, data, visibleSearchBar } = this.state;
    const { navigation } = this.props;
    // console.log(navigation);
    // console.log(this.props);
    return (
      <View style={{ flex: 1, backgroundColor: '#fffa3' }}>
        {/* <Header title='asd' />
        <Header title='linearafd\nfwe' />
        <Header title='sdq' />
        <MyComponent momento='sdqw' />
        <ImageCard url={'https://github.com/react-native-village/react-native-init/raw/master/stargate/images/Stargate.jpg'} />
        <MyComponent momento='momento' /> */}
        { visibleSearchBar ?
          <SearchBar
            colorRight='#fff'
            iconRight="magnify"
            placeholder="Search"
            onChangeText={this._onChangeText}
            value={this.state.value}
            onPressRight={() => this.setState({ visibleSearchBar: false })}
            onBlur={() => this.setState({ visibleSearchBar: true })}
          />
          :
          <Head 
            title={title}
            colorRight={'#fff'}
            iconRight='magnify'
            onPressRight={() => this.setState({ visibleSearchBar: true })}
          />
        }
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

export default connect(null, { searchChanged })(HomeScreen);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, View, Button, Icon, Tabs } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import myTheme from '../../themes/base-theme';

import TabOne from './tabOne';
import TabTwo from './tabTwo';

class NHTabs extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container theme={myTheme}>
        <View>
          <Tabs locked>
            <TabOne tabLabel="Login" />
            <TabTwo tabLabel="Register" />
          </Tabs>
        </View>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHTabs);

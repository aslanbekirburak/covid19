/**
 *
 * Welcome
 *
 */

import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import I18n from 'localization';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectWelcome from './selectors';
import reducer from './reducer';
import saga from './saga';

import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header'
import Stats from '../../components/Stats'
import Total from '../../components/Total'

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch',
    opacity: 0.2
  },
  Wrap: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 1
  },
});

export function Welcome() {
  useInjectReducer({ key: 'welcome', reducer });
  useInjectSaga({ key: 'welcome', saga });

  return (
    // #211042
    <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} colors={['#01081d', '#211042', '#211042', '#331042','#481654', '#531c61']} style={styles.container}>
      <ImageBackground source={require('../../assets/corona.jpeg')} style={styles.backgroundImage}></ImageBackground>
        <View style={styles.Wrap}>
        <View>
            {/* <Text>{I18n.t('firstMessage.hello')} Welcome Container!</Text> */}
            <Header />
          </View>
          <View>
            {/* <Text>{I18n.t('firstMessage.hello')} Welcome Container!</Text> */}
            <Total />
          </View>
          <View>
            <Stats />
          </View>
        </View>
    </LinearGradient>
  );
}

Welcome.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  welcome: makeSelectWelcome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Welcome);

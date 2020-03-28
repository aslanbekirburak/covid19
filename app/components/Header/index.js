import React from 'react';
import axios from 'axios';

import { Dimensions, StyleSheet, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// import Moment from 'react-moment';
// Moment.globalFormat = 'D MMM YYYY';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        alignItems: 'flex-start',
        marginLeft: 10
    },
    stats: {
        width: Dimensions.get('window').width,
        height: 200,
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    stat: {
        width: '33%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    headerTitle: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
    },
    logoWrapper: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 70,
        height: 70,
    },
    textTitle: {
        width: '100%',
        color: '#FFF',
        fontSize: 24,
        textTransform: 'uppercase',
        textAlign: 'left'
    },
    textTitleSmall: {
        width: '100%',
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center'
    },
});

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            total: []
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.logoWrapper}>
                        <Image style={styles.logo} source={require('../../assets/virus.gif')}></Image>
                    </View>
                    <View style={styles.headerTitle}>
                        <Text style={styles.textTitle}>coronavirus pandemic</Text>
                        <Text style={styles.textTitleSmall}>Covid-19 Live World Count</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Header
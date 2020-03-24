import React from 'react';
import axios from 'axios';

import { Dimensions, StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// import Moment from 'react-moment';
// Moment.globalFormat = 'D MMM YYYY';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        marginTop: 20,
        marginBottom: 30,
    },
    stats:{
        width: Dimensions.get('window').width,
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    stat:{
        width: '33%',
    },
    textTitle: {
        color: '#FFF',
        fontSize: 28,
        marginBottom: 16,
        textAlign: 'center'
    },
    text: {
        color: '#FFF',
        fontSize: 14,
        marginBottom: 4,
        textAlign: 'center'
    },
    textN: {
        color: '#FFF',
        fontSize: 24,
        marginBottom: 4,
        textAlign: 'center'
    }
});

class Total extends React.Component {
    constructor() {
        super();
        this.state = {
            total: []
        };
    }
    // make the GET request to fetch data from the URL then using promise function to handle response.
    componentDidMount() {
        setInterval(() => {
            axios.get(`https://corona.lmao.ninja/all`)
                .then(res => {
                    const total = res.data;
                    this.setState({ total });

                    // console.log('------------------------------------');
                    // console.log("totalData:", this.state.total);
                    // console.log('------------------------------------');
                })
        }, 5000
        )
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>Worldwide Coronavirus</Text>
                <View style={styles.stats}>
                    <View style={styles.stat}>
                        <Text style={styles.text}>CASES</Text>
                        <Text style={styles.textN}>{this.state.total.cases}</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.text}>DEATHS</Text>
                        <Text style={styles.textN}>{this.state.total.deaths}</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.text}>RECOVERED</Text>
                        <Text style={styles.textN}>{this.state.total.recovered}</Text>
                    </View>
                </View>
                {/* <Text><Moment unix>{1370001284}</Moment></Text> */}
            </View>
        )
    }
}

export default Total
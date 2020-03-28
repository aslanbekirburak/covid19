import React from 'react';
import axios from 'axios';

import { StyleSheet, View, Text, Image } from 'react-native';
import countryList from "../../utils/countryCode.json"

const styles = StyleSheet.create({
    container: {
        width: '94%',
        marginLeft: '3%',
        height: 120,
        marginTop: 10,
        flexDirection: 'row'
    },
    text: {
        color: '#FFF6FF',
        fontSize: 12,
        marginTop: 2,
        marginBottom: 2,
        textAlign: 'center'
    },
    textL: {
        color: '#FFF6FF',
        fontSize: 22,
        marginTop: 2,
        marginBottom: 2,
        textAlign: 'center',
        fontWeight: '900'
    },
    logo: {
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCountry: {
        color: '#FFF6FF',
        fontSize: 16,
        marginTop: -4,
        textAlign: 'center',
        fontWeight: "900"
    },
    core: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    coreIn: {
        width: '33%',
        textAlign: 'center',
    },
    flag: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        height: 120,
    },
    content: {
        // alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 120,
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
        let fetchData = () => {
            axios.get(`https://corona.lmao.ninja/all`)
                .then(res => {
                    const total = res.data;
                    this.setState({ total });

                    // console.log('------------------------------------');
                    // console.log("totalData:", this.state.total);
                    // console.log('------------------------------------');
                })
        }
        fetchData()
        this.update = setInterval(fetchData, 600000)

    }

    componentWillUnmount() {
        clearInterval(this.update)
    }

    countryConverter = (country) => {
        let countryCode = countryList.find(el => el.name === country)
        return countryCode && countryCode.code
    }

    render() {

        console.log('------------------------------------');
        console.log("data", this.state.total.cases);
        console.log('------------------------------------');

        return (
            <View style={styles.container}>
                <View style={styles.flag}>
                    <Image style={styles.logo} source={require('../../assets/earth.png')}></Image>
                    <Text style={styles.textCountry}>WORLD</Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.core}>
                        <View style={styles.coreIn}>
                            <Text style={styles.textL}>{this.state.total.cases}</Text>
                            <Text style={styles.text}>Cases</Text>
                        </View>
                        <View style={styles.coreIn}>
                            <Text style={styles.textL}>{this.state.total.deaths}</Text>
                            <Text style={styles.text}>Deaths</Text>
                        </View>
                        <View style={styles.coreIn}>
                            <Text style={styles.textL}>{this.state.total.recovered}</Text>
                            <Text style={styles.text}>Recovered</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Total
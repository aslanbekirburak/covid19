import React from 'react';
import axios from 'axios';

import { StyleSheet, View, Text, FlatList } from 'react-native';
import Flag from 'react-native-flags';
import countryList from "../../utils/countryCode.json"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: '94%',
        flexDirection: 'row',
        marginLeft: '3%',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,
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
        fontSize: 24,
        marginTop: 2,
        marginBottom: 2,
        textAlign: 'center'
    },
    textCountry: {
        color: '#FFF6FF',
        fontSize: 14,
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
        height: 80,
    },
    content: {
        // alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 80
    }
});

class Stats extends React.Component {
    constructor() {
        super();
        this.state = {
            countries: []
        };
    }
    // make the GET request to fetch data from the URL then using promise function to handle response.
    componentDidMount() {
        let fetchData = () => {
            axios.get(`https://corona.lmao.ninja/countries`)
                .then(res => {
                    const countries = res.data;
                    this.setState({ countries });

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

    renderItem = (item) => {

        const i = item.item

        return (
            <View style={styles.container}>
                <View style={styles.flag}>
                    <Flag code={this.countryConverter(i.country)} size={48} />
                    <Text style={styles.textCountry}>{i.country}</Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.core}>
                        <View style={styles.coreIn}>
                            <Text style={styles.textL}>{i.cases.toLocaleString()}</Text>
                            <Text style={styles.text}>Cases</Text>
                        </View>
                        <View style={styles.coreIn}>
                            <Text style={styles.textL}>{i.deaths.toLocaleString()}</Text>
                            <Text style={styles.text}>Deaths</Text>
                        </View>
                        <View style={styles.coreIn}>
                            <Text style={styles.textL}>{i.recovered.toLocaleString()}</Text>
                            <Text style={styles.text}>Recovered</Text>
                        </View>
                    </View>
                </View>
            </View>
        )

    }

    render() {

        return (
            <View>
                <FlatList
                    data={this.state.countries}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.country}
                />
            </View>
        )
    }
}

export default Stats
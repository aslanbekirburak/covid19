import React from 'react';
import axios from 'axios';

import { StyleSheet, View, Text, FlatList } from 'react-native';
import Flag from '../../flags';
import countryList from "../../utils/countryCode.json"
// import { List, ListItem } from 'react-native-elements';

// const Germany = "DE"
// const China = "CN"

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginBottom: 8
    },
    text:{
        color: '#FFF6FF'
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
        setInterval(()=>{
        axios.get(`https://corona.lmao.ninja/countries`)
            .then(res => {
                const countries = res.data;
                this.setState({ countries });

                console.log('------------------------------------');
                console.log("stateData:", this.state.countries);
                console.log('------------------------------------');
            })
        },5000)
    }

    countryConverter = (country) => {
        let countryCode = countryList.find(el => el.name === country)
        return countryCode && countryCode.code
    }

    renderItem = (item) => {

        const i = item.item

        return (
            <View style={styles.container}>
                <Flag
                    code={this.countryConverter(i.country)}
                    size={32}
                />
                <Text style={styles.text}>{i.country}</Text>
                <Text style={styles.text}>cases : {i.cases}</Text>
                <Text style={styles.text}>deaths: {i.deaths}</Text>
                <Text style={styles.text}>recovered: {i.recovered}</Text>
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
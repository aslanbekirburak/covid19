import React from 'react';
import axios from 'axios';

import { View, Text, FlatList } from 'react-native';
import Flag from '../../flags';
import countryList from "../../utils/countryCode.json"
// import { List, ListItem } from 'react-native-elements';

// const Germany = "DE"
// const China = "CN"

class Stats extends React.Component {
    constructor() {
        super();
        this.state = {
            countries: []
        };
    }
    // make the GET request to fetch data from the URL then using promise function to handle response.
    componentDidMount() {

        axios.get(`https://corona.lmao.ninja/countries`)
            .then(res => {
                const countries = res.data;
                this.setState({ countries });

                // console.log('------------------------------------');
                // console.log("stateData:", this.state.countries);
                // console.log('------------------------------------');
            })
    }

    countryConverter = (country) => {
        console.log("counrty",country)
        let countryCode = countryList.find(el => el.name === country)
        console.log("countryCode",countryCode && countryCode.code)
        return countryCode && countryCode.code
    }

    renderItem = (item) => {

        const i = item.item

        // console.log('------------------------------------');
        // console.log("renderLog", item);
        // console.log(countryList,"countryList")
        // console.log('------------------------------------');

        // console.log('------------------------------------');
        // console.log("renderLog", item.item.country);
        this.countryConverter(i.country)
        // console.log('------------------------------------');

        return (
            <View>
                <Flag
                    code={this.countryConverter(i.country)}
                    size={32}
                />
                <Text>{i.country}</Text>
                <Text>cases : {i.cases}</Text>
                <Text>deaths: {i.deaths}</Text>
                <Text>recovered: {i.recovered}</Text>
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
import React from 'react';
import axios from 'axios';

import { View, Text } from 'react-native';

// import Moment from 'react-moment';
// Moment.globalFormat = 'D MMM YYYY';


class Total extends React.Component {
    constructor() {
        super();
        this.state = {
            total: []
        };
    }
    // make the GET request to fetch data from the URL then using promise function to handle response.
    componentDidMount() {
        setInterval(()=>
        {axios.get(`https://corona.lmao.ninja/all`)
            .then(res => {
                const total = res.data;
                this.setState({ total });

                console.log('------------------------------------');
                console.log("totalData:", this.state.total);
                console.log('------------------------------------');
            })
        },5000
        )
    }

    render() {

        return (
            <View style={{ backgroundColor: "yellow" }}>
                <Text>Total cases : {this.state.total.cases}</Text>
                <Text>Total deaths : {this.state.total.deaths}</Text>
                <Text>Total recovered : {this.state.total.recovered}</Text>
                {/* <Text><Moment unix>{1370001284}</Moment></Text> */}
            </View>
        )
    }
}

export default Total
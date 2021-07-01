import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {WebView} from 'react-native-webview'


export default class StarMap extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            latitude:"",
            longitude:"",
        }
    }

    

    render() {

        const longitude = this.state.longitude
        const latitude = this.state.latitude
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellation=true&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=sterio&showdate=false&showposition=false`;

        return(
            <View style = {{flex:1}}>
                <Text style = {{fontSize:30,  textAlign:"center", marginTop:"10%",}}>Star Map</Text>
                <TextInput
                    style = {{height:40, borderColor:"gray", borderWidth:1, marginTop:40, width:"90%", marginLeft: 20, margiinRight:20,borderRadius : 30, textAlign:"center"}}
                    placeholder="Enter your latitude"
                    placeholderTextColor="red"
                    onChangeText={(text)=>{
                        this.setState({
                            latitude:text
                        })
                    }}
                />
                <TextInput
                    style = {{height:40, borderColor:"gray", borderWidth:1, width:"90%", marginTop:20, marginLeft: 20, marginRight:20, borderRadius : 30, textAlign:"center"}}
                    placeholder="Enter your longitude"
                    placeholderTextColor="blue"
                    onChangeText={(text)=>{
                        this.setState({
                            longitude:text
                        })
                    }}
                />
                <WebView
                    scalesPageToFit={true}
                    source = {{uri: path}}
                    style = {{marginTop:20, marginBottom:20, flex: 1}}
                />
            </View>
            
        )
    }

}
import axios from 'axios';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default class SpaceCrafts extends React.Component{
    constructor(props){
        super(props)
        this.state={
            aircrafts: []
        }
    }

    getData=()=>{
        axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
            .then(response=>{
                this.setState({
                    aircrafts:response.data.results
                })
            })
            .catch(error=>{
                console.log(error.message)
            })
    }

    keyExtractor=(item, index)=>index.toString()

    renderItem=({item})=>{
        return(
            <View style = {{borderWidth:0.75, justifyContent:"center", alignItems:"center", elevation:10}}>
                <Image source = {{uri:item.agency.image_url}} style = {{width:"100%", height: 200, marginTop:15, marginBottom:15, marginRight:10}}/>
                <Text style = {{color:"blue", fontSize:20, fontWeight:"bold"}}>{item.name}</Text>
                <Text style = {{color:"skyblue"}}>{item.agency.name}</Text>
                <Text>Description: {item.agency.description}</Text>
            </View> 
        )
    }

    componentDidMount(){
        this.getData()
    }

    render(){
        return(
            <View style = {{flex:1, justifyContent: "center", alignItems:"center"}}>
              <View style = {{flex:0.25}}>
                <Text> Space Crafts </Text>
              </View>
              <View style = {{flex:1}}>
                  <FlatList 
                    keyExtractor={this.keyExtractor}
                    data={this.state.aircrafts}
                    renderItem={this.renderItem}/>
              </View>
            </View>
        )
    }
}
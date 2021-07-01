import React from 'react';
import { Text, View, SafeAreaView, ImageBackground, StatusBar, Platform, StyleSheet, Alert, FlatList, TouchableOpacity, Linking, Image } from 'react-native';
import axios from 'axios'

export default class DailyPic extends React.Component{
    constructor(props){
        super(props)
        this.state={
            picture: null,
        }
      }

    getPicture=()=>{
        axios 
            .get("https://api.nasa.gov/planetary/apod?api_key=wmJd1bfrEzOFQbbF10bRdWQFxncwRCDtI2Zl4xNQ")
            .then(response=>{
                this.setState({
                    picture:response.data
                });
                console.log("setting picture response: " + JSON.stringify(response.data));
            })
            .catch(error=>{
                Alert.alert(error.message)
            })
    }

    video = () => {
        if (this.state.picture == null) {
            return (
                <ImageBackground
                source = {require('../assets/stars.gif')} style = {styles.backgroundImage}>
                <Text>Loading... </Text>
            </ImageBackground>
            );
        }
        return(
            <ImageBackground
                source = {require('../assets/stars.gif')} style = {styles.backgroundImage}>
                <Text  style = {styles.titleText}>Astronomy picture of the day </Text>
                <Text >{this.state.picture?.title}</Text>
                <TouchableOpacity onPress={()=>Linking.openURL(this.state.picture?.url).catch(err => console.error("We could not load your page, sorry", err))}>
                    <Image source = {require("../assets/play-video.png")} style = {{width:50, height:50}}/>
                </TouchableOpacity>
                <Text style={styles.explanationStyle}>{this.state.picture?.explanation}</Text>
            </ImageBackground>
        );
    }

    picture = () => {
        if (this.state.picture == null) {
            return (
                <ImageBackground
                source = {require('../assets/stars.gif')} style = {styles.backgroundImage}>
                <Text>Loading... </Text>
            </ImageBackground>
            );
        }
        return(
            <ImageBackground
                source = {this.state.picture?.url} style = {styles.backgroundImage}>
                <Text style = {styles.titleText}>Astronomy picture of the day </Text>
                <Text style = {{fontSize:28, color:"blue"}}>{this.state.picture?.title}</Text>
                <Text style={styles.explanationStyle}>{this.state.picture?.explanation}</Text>
            </ImageBackground>
        )
    }

    componentDidMount(){
        this.getPicture()
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <SafeAreaView style = {styles.androidSafeArea}/>
                { 
                    this.state.picture?.media_type == "image"  ? this.picture() : this.video()
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    androidSafeArea:{
        marginTop:Platform.OS==="android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex:1,
        height: "auto",
        width: "auto"
    },
    explanationStyle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginTop:550
    },
    titleText:{
        fontSize:26,
        color:"red",
    }
    
})

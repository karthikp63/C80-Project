import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
            <SafeAreaView style = {styles.androidSafeArea}/>
            <ImageBackground source={require("../assets/space.gif")} style = {styles.backgroundStyle}>
            <Text style = {styles.titleText}> Stellar App </Text>

            <TouchableOpacity style = {styles.buttonStyles}
            onPress={()=>{
            this.props.navigation.navigate("Space Crafts")
            }}> 
            <Text style = {styles.buttonText}>Space Crafts</Text> 
            <Text style = {styles.knowMore}>{"Know More ---> "}</Text>
            <Text style = {styles.digit}>1</Text>
            <Image source={require("../assets/space_crafts.png")} style = {styles.iconImage}/>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.buttonStyles}
            onPress={()=>{
            this.props.navigation.navigate("Star Map")
            }}> 
            <Text style = {styles.buttonText}>Star Map</Text>
            <Text style = {styles.knowMore}>{"Know More ---> "}</Text>
            <Text style = {styles.digit}>2</Text>
            <Image source={require("../assets/star_map.png")} style = {styles.iconImage}/>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.buttonStyles}
            onPress={()=>{
            this.props.navigation.navigate("Daily Pic")
            }}> 
            <Text style = {styles.buttonText}>Daily Picture</Text> 
            <Text style = {styles.knowMore}>{"Know More ---> "}</Text>
            <Text style = {styles.digit}>3</Text>
            <Image source={require("../assets/daily_pictures.png")} style = {styles.iconImage}/>
            </TouchableOpacity>
            </ImageBackground>
      </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titleText: {
      fontSize: 40,
      fontWeight:"bold",
      color:"red",
      marginLeft:800
    },
    androidSafeArea:{
      marginTop: Platform.OS==="android" ? StatusBar.currentHeight : 0
    },
    buttonStyles:{
      marginTop: 50,
      flex:0.25,
      marginLeft:100,
      marginRight:450,
      borderRadius: 30,
      backgroundColor: "white"
    },
    buttonText:{
      fontSize:35,
      fontWeight:"bold",
      color:"black",
      marginTop:60,
      paddingLeft:30
    },
    backgroundStyle:{
      flex:1,
      resizeMode:"cover"
    },
    knowMore:{
      paddingLeft:30,
      color:"red",
      fontSize:15,
    },
    digit:{
      position:"absolute",
      color:"rgba(183, 183, 183, 0.5)",
      fontSize:150,
      right:20,
      bottom:-15,
      zIndex:-1
    },
    iconImage:{
      position:"absolute",
      height:200,
      width:200,
      resizeMode:"contain",
      right:20,
      top:-70,
    }
  });
  
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



const Task =  (props)=>{
    
    
    return(
        <View style = {styles.item}>
            <View style = {styles.itemleft}>
                <View style = {styles.square}></View> 
                <Text style = {styles.itemtext}>{props.text}</Text>
            </View>
            <View style = {styles.circular}></View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#fff",
        borderRadius:10,
        padding:15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20,

    },
    itemleft:{
        flexDirection:"row",
        alignItems:"center",
        flexWrap:"wrap"

    },
    square:{
        width:24,
        height:24,
        backgroundColor:"#55BCF6",
        opacity:0.4,
        borderRadius:5,
        marginRight:15,


    },
    itemtext:{
        maxWidth:"80%"
    },
    circular:{
        width:12,
        height:12,
        borderColor:"#55BCF6",
        borderWidth:2,
        borderRadius:5,
    }
});

export default Task;
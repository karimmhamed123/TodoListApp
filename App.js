import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, Image, ScrollView} from 'react-native';

import Task from './components/Task';

export default function App() {
  
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = ()=>{
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index)=>{
    let itemscopy = [...taskItems];
    itemscopy.splice(index,1);
    setTaskItems(itemscopy);
  }

  return (
    <View style={styles.container}>
     
      <View style = {styles.taskswrapper}>
       <Text style = {styles.title}>Today's tasks</Text>
       <Image
        source = {require("./208-2083254_png-file-svg-shopping-list-icon-png.png")}
        style = {{height:109, width:115, borderRadius:50}}
       />
      </View>

      <ScrollView>
      <View style = {styles.items}>
        {
          taskItems.map((item, index)=>{
            return(
              <TouchableOpacity key = {index} onPress = {()=> completeTask(index)}>
                <Task  text = {item}/>
              </TouchableOpacity>
              ) 
          })
        }
        {/* <Task text = {'Task 1'}/>
        <Task text = {'Task 2'}/> */}
        
      </View>
      </ScrollView>
      <KeyboardAvoidingView
      behavior = {Platform.OS === "android"?"padding":"height"}
      style = {styles.writeTaskWrapper}
      >
        <TextInput
          style = {styles.input}
          placeholder = {"Write a task"}
          value = {task}
          onChangeText = {text => setTask(text)}
        />
        <TouchableOpacity
        onPress = {()=> handleAddTask()}>
          <View style = {styles.addwrapper}>
            <Text style = {styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>
        
      </KeyboardAvoidingView>
      
    </View>
  );}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    
  },
  taskswrapper:{
    paddingTop:65,
    paddingHorizontal:20,
    flexDirection:"row",
    justifyContent:"space-between"
    
    
    
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    bottom:"-10%"
  },
  items:{
    paddingHorizontal:20,
    marginTop:30,
    
    
    


  },
  writeTaskWrapper:{
    position:"absolute",
    bottom:60,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
    width:250
  },
  addwrapper:{
    width:60,
    height:60,
    backgroundColor:"#fff",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#C0C0C0",
    borderWidth:1,
  },
  addtext:{

  }

});

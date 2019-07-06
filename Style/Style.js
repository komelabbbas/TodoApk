import React, { Component } from 'react'
import { StyleSheet , Platform } from 'react-native'


const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor : '#ffde00' ,
        paddingTop: Platform.OS === 'ios' ? 40 : 25 ,
        paddingBottom: Platform.OS === 'ios' ? 40 : 25 ,
        paddingLeft: Platform.OS === 'ios' ? 30 : 25 ,
        paddingRight: Platform.OS === 'ios' ? 30 : 25 ,

    },  
    data_body : {
        backgroundColor: 'white' ,
        borderBottomWidth: 1 ,
        borderColor : 'gray' 
    } ,
    data : {
        backgroundColor: 'white' ,
        padding : 10 ,
        flex : 1 ,
        height : 200 ,
    } ,
    item: {  
        fontSize: 17,  
        margin : 4 ,
        padding : 4 ,
       
    },  
    heading : {
        textAlign: 'center' ,
        fontSize: 20
    } ,
    headinginfo : {
        textAlign: 'center' ,
        fontSize: 14 ,
        marginTop : 10
    } ,
    input : {
        height: 40, 
        borderColor: '#eee7e7', 
        borderWidth: 1 ,
        backgroundColor: 'white' ,
        padding : 10 ,
        marginTop : 15 ,
        marginBottom : 15
    } , 
    focus : {
        borderWidth : 0 ,
        borderBottomWidth : 1 ,
        borderColor: 'gray',
        
    } ,
    swipdelete : {
        color : 'blue' ,
        borderColor : 'red' ,
        padding : 10
    } ,
    loading : {
        position : 'absolute' ,
        top:   '50%' ,
        left: '50%' ,
        zIndex: 1
    }
   
})  
  
export default styles

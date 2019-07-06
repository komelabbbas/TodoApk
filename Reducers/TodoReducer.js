import React, { Component } from 'react'
import ActionTypes from '../Constant/Constant';


const INITIAL_STATE = {
   id : '' ,
   todo_text : '' 
}

export default (state = INITIAL_STATE , action) => {
    
      
     switch (action.type) {
      
       
        case ActionTypes.TODO_DATA_FETCH:
                return ({
                    data : action.payload 
                })  
        case ActionTypes.TODO_DATA_REQUEST:
                return (
                    state
                )  
        default:
                 return state;
    }

}
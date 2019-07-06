import React, { Component } from 'react'




// let uri = 'http://localhost:8000/api/Todo';

let uri = 'http://10.0.2.2:8000/api/Todo' ;

export class TodoAction extends Component {
    
   
    TODO_FETCH_API() {
       
       
        return fetch(uri, {
            method: 'GET'
         }).then((response) => response.json())
         .then((responseJson) => {
            return responseJson
         })
    }
    

    TODO_ADD_API(item) {

       

        return fetch(uri, {
            method:'POST',
            headers: {
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                "tasks":item.description,
            }),
            })
            .then((response) => response.json())
            .then((responseData) => {
                return responseData
        })
       
       
    }


    TODO_DELETE_API(id) {

       
        return fetch(uri+'/'+id, {
            method:'delete',
            })
            .then((response) => response.json())
            .then((responseData) => {
                return responseData
        })
    
    }
    
}

export default new TodoAction()

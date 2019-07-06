import React, { Component } from 'react';
import {  FlatList, View  , Text , TextInput , ActivityIndicator} from 'react-native';  
import {connect} from 'react-redux';
import ActionTypes from '../../Constant/Constant';
import styles from '../../Style/Style';
import TodoList from './TodoList';


var Focus = false

class Todo extends Component {
  constructor(props) {
    super(props);

      this.TodoAdd = this.TodoAdd.bind(this)
      this.TodoDelete = this.TodoDelete.bind(this)

      this.state = {
        todo_text : '' ,
        LoadingShow : false
      };
      
  }

  componentDidMount() {
    this.props.LoadTodo()
  }

  TodoAdd () {

      this.setState({
          LoadingShow : true
      })

      if(!(this.state.todo_text === ''))
      {
        
          let data = { 'description' : this.state.todo_text }
          this.props.AddTodo(data)
      }
        
      
      Focus = false 

      setTimeout(() => {
          this.setState({ LoadingShow: false , todo_text : ''})
        }, 300);
      
  }

    TodoDelete = (id) => {
          
        this.setState({
            LoadingShow : true
        })
        
       this.props.DeleteTodo(id)
        
        setTimeout(() => {
            this.setState({ LoadingShow: false })
          }, 300);

    }

      InputFocus () {
          Focus = true
      }


  render() {

    return (
     
         <View style={styles.container}>  

            {
                this.state.LoadingShow ?  
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="gray"/>
                </View> : <View></View>
            }
            
            <Text style={styles.heading}>TODOS APP</Text>
            <Text style={styles.headinginfo}>
                This Demo showcases a simple workflow
            </Text>

            <View>
                <TextInput
                style={[styles.input , Focus ? styles.focus : '']}
                onChangeText={(todo_text) => this.setState({todo_text}) }
                value={this.state.todo_text}
                placeholder='New Todo'
                onSubmitEditing={this.TodoAdd}
                onFocus={this.InputFocus}
                />
           </View>
          
            {
            typeof this.props.TodoData.data === 'undefined' ||  this.props.TodoData.data.length === 0 
            ?
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="gray"/>
            </View>
            :
            <FlatList  
                data={this.props.TodoData.data}  
                renderItem={
                    ({item}) => 
                        <View>
                            <TodoList item={item} index={item.id} {...this} />
                        </View>
                    
                        }  
                keyExtractor={
                    (item) => item.id.toString() 
                    }
                
                style={styles.data}
            />  
            }
          

      
      </View>  

    );
  }
}


function mapStateToProp(state){
    return({
        TodoData: state.TodoReducer
    })
}

function mapDispatchToProp(dispatch){
    return({

         LoadTodo    :  ()     => {   dispatch({ type: ActionTypes.TODO_DATA_REQUEST })   } ,
        
         AddTodo     :  (item) => {   dispatch({ type: ActionTypes.TODO_DATA_ADD , data : item})  }  ,

         DeleteTodo  :  (id)   => {   dispatch({ type: ActionTypes.TODO_DATA_DELETE , data : id})  }  ,
        
    })
}


export default connect(mapStateToProp,mapDispatchToProp)(Todo);
import React, { Component } from 'react'
import { Text, View , Alert , ScrollView } from 'react-native'
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../../Style/Style';

export class TodoList extends Component {

   

    render() {

        const swipe = {

            autoClose : true ,
            right : [
              {
                
                color : 'white' ,
                onPress : () => {  
                    Alert.alert(
                        '' ,
                        'Are You Sure You have to Remove this Todo ??',
                        [
                          {text: 'Cancel'},
                          {text: 'OK', onPress: () => this.props.TodoDelete(this.props.index) },
                        ],
                        { cancelable: false }
                      )
                    
                } ,
                text : <Icon name="trash-alt" size={15} style={{ color : 'red' }} /> ,
                type : 'delete' ,
                backgroundColor:  'white'
            }
            ] ,
        
        };

        return (

                <ScrollView>

                    <Swipeout {...swipe} style={styles.data_body}>
                        <View>
                            <Text 
                                style={styles.item} 
                                onPress={ () => {
                                    Alert.alert(
                                            '' ,
                                            'Are You Sure You have to Remove this Todo ??',
                                            [
                                            {text: 'Cancel'},
                                            {text: 'OK', onPress: () => this.props.TodoDelete(this.props.index) },
                                            ],
                                            { cancelable: false }
                                            )
                                        }  
                                } >
                                {this.props.item.text}
                            </Text>
                        </View>
                    </Swipeout>

                </ScrollView>
            
        )
    }
}




export default TodoList

/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import store from './Store';
import Todo from './Components/Module/Todo';

const App = () => (
    
    <Provider store = { store }>
      <Todo />
    </Provider>
    
  )

  
AppRegistry.registerComponent(appName, () => App);

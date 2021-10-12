/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Platform,
  LogBox,
  View,
  Text
} from 'react-native'
import { createRootNavigator } from './config/routers';
const TAG = 'App';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }


  render() {

    const Layout = createRootNavigator('Home');
    return Layout;

  }
}

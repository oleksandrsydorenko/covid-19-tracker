import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { State } from './providers';
import { Stats, Updates } from './screens';

const { Navigator, Screen } = createStackNavigator();

const App = () => (
  <State>
    <NavigationContainer>
      <Navigator initialRouteName="Stats">
        <Screen name="Stats" component={Stats} />
        <Screen name="Updates" component={Updates} />
      </Navigator>
    </NavigationContainer>
  </State>
);

export default App;

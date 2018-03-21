import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from './containers/main';
import Header from './components/header';


const RootRouter = () => (
  <Router>
    <Scene key="root" >
      <Scene key="main" component={Main} title="Main"  initial />
    </Scene>
  </Router>
);

export default RootRouter;

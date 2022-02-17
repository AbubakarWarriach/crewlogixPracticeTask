// import 'react-native-gesture-handler';
import React from 'react';
import { } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/taskFive/store';
import TaskFive from './src/taskFive/TaskFive';
// import TaskFour from './src/taskFour/TaskFour';
// import DrawerNavigation from './src/config/DrawerNavigation';
// import TopTabNavigation from './src/config/TopTabNavigation';
// import BottomMaterialTabNav from './src/config/BottomMaterialTabNav';
// import CustomeTabNavigation from './src/config/CustomeTabNavigation';
// import BottomTabNavigation from './src/config/BottomTabNavigation';
// import StackNavigation from './src/config/StackNavigation';


const App = () => {

  return (
    <Provider store={store}>
      {/* <BottomTabNavigation />
      <CustomeTabNavigation />
      <BottomMaterialTabNav />
      <TopTabNavigation />
      <DrawerNavigation />
      <TaskFour /> */}
      <TaskFive />
    </Provider>
  );
};

export default App;

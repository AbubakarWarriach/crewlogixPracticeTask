import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, } from 'react-native';
import TaskTwo from './src/taskTwo/TaskTwo';



const App = () => {

  return (
    <ScrollView style={styles.body}>
      <StatusBar
        animated={true}
        backgroundColor="#e55039"
      />
      
      <TaskTwo />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f1f2f6',
    paddingBottom: 100,
    // marginBottom: 20,
  },
});

export default App;

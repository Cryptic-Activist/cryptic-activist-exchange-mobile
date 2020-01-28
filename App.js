import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import Navigator from './src/routes/homeStack';
import NavBar from './src/components/UI/NavigationBar'

const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor='#e8bb25' />
      <SafeAreaView>
        <NavBar />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <Text style={styles.test}>Test</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    height: "100%",
  },
  test: {
    textAlign: "center",
    fontSize: 25
  }
});

export default App;

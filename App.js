import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import { Focus } from './src/features/Focus';
import { FocusHistory } from './src/features/FocusHistory';
import { Timer } from './src/features/Timer';

import { colors } from './src/utils/colors';

export default function App() {
  const [history, setHistory] = useState([]);
  const [currentSubject, setCurrentSubject] = useState(null);
  
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus setCurrentSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
          <Timer 
            focusSubject={currentSubject}
            onTimerEnd={(focusSubejct)=> {setHistory([...history, focusSubejct])}}
            clearSubejct={()=>{setCurrentSubject(null)}}
          />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'andriod' ? StatusBar.currentHeight : 0,
    paddingLeft: 30,
    backgroundColor: colors.darkBlue,
  }
});

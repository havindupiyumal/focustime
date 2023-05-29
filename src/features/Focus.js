import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { colors } from '../utils/colors';
import { paddingSizes } from '../utils/sizes';

import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ setCurrentSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on"
          value={subject}
          onChangeText={(text) => setSubject(text)}
        />
        <View style={styles.buttonContainer}>
          <RoundedButton
            onPress={() => setCurrentSubject(subject)}
            title="+"
            size={50}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: paddingSizes.md,
  },
  inputContainer: {
    padding: paddingSizes.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});

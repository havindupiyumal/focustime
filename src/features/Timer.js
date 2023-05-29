import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { ProgressBar } from 'react-native-paper'

import { paddingSizes } from '../utils/sizes';
import { colors } from '../utils/colors';

import { Countdown } from '../components/countdown';
import { Timing } from './Timing';
import { RoundedButton } from '../components/RoundedButton';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];


export const Timer = ({ focusSubject, onTimerEnd, clearSubejct }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject)
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes = {minutes}
          isPaused={!isStarted}
          onProgress={(progress) => setProgress(progress/100) }
          onEnd={onEnd}
        />

        <View style={{ paddingTop: paddingSizes.xxxl }}>
          <Text style={styles.title}>Focusing On :</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>

      </View>

      <View style={{paddingTop: paddingSizes.sm}} >
        <ProgressBar progress={progress} color={colors.progressBar}  style={{ height: 10 }} />
      </View>
      <View style={styles.timingWrapper} >
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton
            title="start"
            onPress={() => setIsStarted(true)}
            size={100}
          />
        ) : (
          <RoundedButton
            title="pause"
            onPress={() => setIsStarted(false)}
            size={100}
          />
        )}
      </View>
      <View style={styles.clearWrapper} >
        <RoundedButton
          title="Cancel"
          onPress={() => clearSubejct()}
          size={80}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    paddingTop: paddingSizes.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timingWrapper:{
    flex: 0.1,
    flexDirection: 'row',
    padding: paddingSizes.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearWrapper:{
    flex: 0.1,
    flexDirection: 'row',
    padding: paddingSizes.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});

import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Dice from './components/Dice';

export default function App() {
  const [diceNumber, setDiceNumber] = useState(1);

  const rollDice = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(random);
  };

  return (
    <View style={styles.container}>
      <Dice number={diceNumber} />
      <Button title="Roll Dice 🎲" onPress={rollDice} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  }
});

import React from 'react';
import { Image, StyleSheet } from 'react-native';

type DiceProps = {
  number: number;
};

const diceImages: Record<number, any> = {
  1: require('../assets/Dice1.png'),
  2: require('../assets/Dice2.png'),
  3: require('../assets/Dice3.png'),
  4: require('../assets/Dice4.png'),
  5: require('../assets/Dice5.png'),
  6: require('../assets/Dice6.png'),
};

export default function Dice({ number }: DiceProps) {
  return <Image source={diceImages[number]} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

import React from 'react';
import { Button, View } from 'react-native';

type BtnProps = {
  title: string;
  onPress: () => void;
};

export default function Btn({ title, onPress }: BtnProps) {
  return (
    <View className="rounded-3xl border border-white p-2">
      <Button title={title} onPress={() => onPress()} color="#ffffff" />
    </View>
  );
}

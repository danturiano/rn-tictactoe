import Cell from 'components/Cell';
import { Container } from 'components/Container';
import { useState } from 'react';
import { View } from 'react-native';
import './global.css';

export default function App() {
  const defaultBoard = [null, null, null, null, null, null, null, null, null];
  const [board, setBoard] = useState(defaultBoard);

  return (
    <Container>
      <View className="w-96 flex-row flex-wrap">
        {board.map((cell, index) => (
          <Cell value={index} />
        ))}
      </View>
    </Container>
  );
}

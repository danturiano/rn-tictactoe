import { Button, View } from 'react-native';

import Cell from './Cell';
import { Container } from './Container';
import { useGame } from './GameProvider';

export default function GameScreen({ setScreen }: { setScreen: (screen: string) => void }) {
  const { board, isGameOver, resetGame } = useGame();

  return (
    <Container>
      <View className="w-96 flex-row flex-wrap">
        {board.map((cell, index) => (
          <Cell value={cell} key={index} index={index} />
        ))}
      </View>
      {isGameOver && (
        <View className="border">
          <Button title="Reset Game" onPress={resetGame} />
          <Button title="End Game" onPress={() => setScreen('home')} />
        </View>
      )}
    </Container>
  );
}

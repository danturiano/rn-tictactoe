import { Button, Text, View } from 'react-native';

import Cell from './Cell';
import { Container } from './Container';
import { useGame } from './GameProvider';
import Btn from './Btn';

export default function GameScreen({ setScreen }: { setScreen: (screen: string) => void }) {
  const { board, isGameOver, resetGame, token } = useGame();

  return (
    <View
      className={`my-12 flex w-full flex-1 items-center justify-center bg-[#0B192C] px-12 ${isGameOver && 'justify-between'}`}>
      {isGameOver && (
        <Text className="text-4xl font-semibold text-white">
          {token === 'X' ? 'O' : 'X'} is the winner!
        </Text>
      )}
      <View className="w-96 flex-row flex-wrap">
        {board.map((cell, index) => (
          <Cell value={cell} key={index} index={index} />
        ))}
      </View>
      {isGameOver && (
        <View className="w-full gap-2">
          <Btn title="Reset Game" onPress={() => resetGame()} />
          <Btn
            title="End Game"
            onPress={() => {
              setScreen('home');
              resetGame();
            }}
          />
        </View>
      )}
    </View>
  );
}

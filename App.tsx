import Cell from 'components/Cell';
import { Container } from 'components/Container';
import { useState } from 'react';
import { View } from 'react-native';
import './global.css';

let playerOne: number[] = [];
let playerTwo: number[] = [];

const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const checkPatternMatch = (playerMoves: number[]) => {
  return winningPattern.some((pattern) => pattern.every((pos) => playerMoves.includes(pos)));
};

export default function App() {
  const defaultBoard: (string | null)[] = Array(9).fill(null);

  const [currentPlayer, setCurrentPlayer] = useState('playerOne');
  const [board, setBoard] = useState<(string | null)[]>(defaultBoard);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [token, setToken] = useState('X');

  const resetGame = () => {
    playerOne = [];
    playerTwo = [];
    setBoard(defaultBoard);
    setIsGameOver(false);
  };

  const onPressHandler = (index: number) => {
    if (currentPlayer === 'playerOne') {
      playerOne.push(index);
      const hasMatch = checkPatternMatch(playerOne);
      if (hasMatch) {
        console.log(`${currentPlayer} Winner!`);
        setIsGameOver(true);
      }
    } else {
      playerTwo.push(index);
      checkPatternMatch(playerTwo);
      const hasMatch = checkPatternMatch(playerOne);
      if (hasMatch) {
        console.log(`${currentPlayer} Winner!`);
        setIsGameOver(true);
      }
    }
    setBoard((cells) => cells.map((cell, i) => (i === index ? token : cell)));
    setToken((prev) => (prev === 'X' ? 'O' : 'X'));
    setCurrentPlayer((prev) => (prev === 'playerOne' ? 'playerTwo' : 'playerOne'));
  };

  return (
    <Container>
      <View className="w-96 flex-row flex-wrap">
        {board.map((cell, index) => (
          <Cell
            value={cell}
            key={index}
            index={index}
            pressHandler={onPressHandler}
            isGameOver={isGameOver}
          />
        ))}
      </View>
    </Container>
  );
}

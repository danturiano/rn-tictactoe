import { winningPattern } from 'constants/constants';
import { createContext, useContext, useState } from 'react';

type GameContextType = {
  board: (string | null)[];
  isGameOver: boolean;
  onPressHandler: (index: number) => void;
  resetGame: () => void;
};

let playerOne: number[] = [];
let playerTwo: number[] = [];

const checkPatternMatch = (playerMoves: number[]) => {
  return winningPattern.some((pattern) => pattern.every((pos) => playerMoves.includes(pos)));
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export default function GameProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState('X');
  const [currentPlayer, setCurrentPlayer] = useState('playerOne');
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const defaultBoard: (string | null)[] = Array(9).fill(null);
  const [board, setBoard] = useState<(string | null)[]>(defaultBoard);

  const resetGame = () => {
    playerOne = [];
    playerTwo = [];
    setBoard(defaultBoard);
    setIsGameOver(false);
    setCurrentPlayer('playerOne');
    setToken('X');
  };

  const handlePlayerMove = (index: number) => {
    const playerMoves = currentPlayer === 'playerOne' ? playerOne : playerTwo;
    playerMoves.push(index);

    if (checkPatternMatch(playerMoves)) {
      console.log(`${currentPlayer} Winner!`);
      setIsGameOver(true);
      return;
    }

    setCurrentPlayer(currentPlayer === 'playerOne' ? 'playerTwo' : 'playerOne');
  };

  const onPressHandler = (index: number) => {
    handlePlayerMove(index);
    setBoard((cells) => cells.map((cell, i) => (i === index ? token : cell)));
    setToken((prev) => (prev === 'X' ? 'O' : 'X'));
  };

  return (
    <GameContext.Provider value={{ board, onPressHandler, resetGame, isGameOver }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

import { Pressable, Text } from 'react-native';

import { useGame } from './GameProvider';

type CellProps = {
  value: string | null;
  index: number;
};

export default function Cell({ value, index }: CellProps) {
  const { isGameOver, onPressHandler } = useGame();

  return (
    <Pressable
      className={styles.cell}
      onPress={() => onPressHandler(index)}
      disabled={value !== null || isGameOver}>
      <Text>{value}</Text>
    </Pressable>
  );
}

const styles = {
  cell: 'flex h-32 w-32 items-center justify-center border',
};

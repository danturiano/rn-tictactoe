import { Pressable, Text } from 'react-native';

type CellProps = {
  value: string | null;
  index: number;
  isGameOver: boolean;
  pressHandler: (index: number) => void;
};

export default function Cell({ value, index, isGameOver, pressHandler }: CellProps) {
  return (
    <Pressable
      className={styles.cell}
      onPress={() => pressHandler(index)}
      disabled={value !== null || isGameOver}>
      <Text>{value}</Text>
    </Pressable>
  );
}

const styles = {
  cell: 'flex h-32 w-32 items-center justify-center border',
};

import { Image, Pressable } from 'react-native';

import { useGame } from './GameProvider';

type CellProps = {
  value: string | null;
  index: number;
};

export default function Cell({ value, index }: CellProps) {
  const { isGameOver, onPressHandler } = useGame();

  return (
    <Pressable
      className={`flex h-32 w-32 items-center justify-center border-2 border-white ${index === 0 && 'border-l-0 border-t-0'} ${index === 2 && 'border-r-0 border-t-0'} ${index === 1 && 'border-t-0'} ${index === 3 && 'border-l-0'}  ${index === 5 && 'border-r-0'} ${index === 6 && 'border-b-0 border-l-0'} ${index === 7 && 'border-b-0'} ${index === 8 && 'border-b-0 border-r-0'}`}
      onPress={() => onPressHandler(index)}
      disabled={value !== null || isGameOver}>
      {value && (
        <Image
          source={value === 'X' ? require('../assets/X.png') : require('../assets/O.png')}
          style={{ width: 40, height: 40 }}
        />
      )}
    </Pressable>
  );
}

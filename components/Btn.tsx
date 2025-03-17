import { Pressable, Text } from 'react-native';

type BtnProps = {
  title: string;
  onPress: () => void;
};

export default function Btn({ title, onPress }: BtnProps) {
  return (
    <Pressable
      onPress={() => onPress()}
      className="rounded-3xl border border-white bg-transparent p-4">
      <Text className="text-center text-white">{title}</Text>
    </Pressable>
  );
}

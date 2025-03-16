import { Text, View } from 'react-native';

export default function Cell({ value }: { value: number }) {
  return (
    <View className="h-32 w-32 border">
      <Text>{value}</Text>
    </View>
  );
}

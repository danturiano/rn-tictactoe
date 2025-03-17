import { Image, View } from 'react-native';

import Btn from './Btn';
import { Container } from './Container';

export default function HomeScreen({ setScreen }: { setScreen: (screen: string) => void }) {
  return (
    <Container>
      <View className="flex-col gap-16">
        <View className="flex-row">
          <Image source={require('../assets/X.png')} style={{ width: 120, height: 120 }} />
          <Image source={require('../assets/O.png')} style={{ width: 120, height: 120 }} />
        </View>
        <Btn title="play with friend" onPress={() => setScreen('game')} />
      </View>
    </Container>
  );
}

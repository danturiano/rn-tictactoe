import { Button, View } from 'react-native';

import { Container } from './Container';

export default function HomeScreen({ setScreen }: { setScreen: (screen: string) => void }) {
  return (
    <Container>
      <View>
        <Button title="Start game" onPress={() => setScreen('game')} />
      </View>
    </Container>
  );
}

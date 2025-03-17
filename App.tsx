import { Container } from 'components/Container';
import GameProvider from 'components/GameProvider';
import GameScreen from 'components/GameScreen';
import HomeScreen from 'components/HomeScreen';
import { useState } from 'react';
import './global.css';

export default function App() {
  const [screenName, setScreenName] = useState('home');
  let screen;

  const setScreenHandler = (name: string) => {
    setScreenName(name);
  };

  switch (screenName) {
    case 'home':
      screen = <HomeScreen setScreen={setScreenHandler} />;
      break;
    case 'game':
      screen = <GameScreen setScreen={setScreenHandler} />;
      break;
  }

  return (
    <GameProvider>
      <Container>{screen}</Container>
    </GameProvider>
  );
}

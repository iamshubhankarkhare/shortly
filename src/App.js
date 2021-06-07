import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Box, Flex, Button } from './components/styledComponents';
import bgBoostDesktop from './assests/bg-boost-desktop.svg';

function App() {
  console.log(bgBoostDesktop);
  return (
    <ThemeProvider theme={theme}>
      <Flex
        color="#fff"
        bg="neutral.veryDarkViolet"
        justifyContent="center"
        my="4"
        backgroundImage={`url(${bgBoostDesktop})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Button
          p="4"
          bg="primary.cyan"
          borderRadius="21px"
          color="primary.cyan"
        >
          Tomato{' '}
        </Button>
        <div>Tomato </div>
        <div>Tomato </div>
        <div>Tomato </div>
        <div>Tomato </div>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
